---
name: granola-cohort-notes
description: >
  Syncs a Granola meeting note into the Young & Aligned /notes pages. Trigger when the
  user says "add a note from Granola", "sync the latest Granola note", "add week N
  notes", or otherwise asks to turn a Granola meeting into a /notes week entry.
  Only use for the Young & Aligned site (Astro + Tailwind) at the current workspace.
---

# Granola Cohort Notes → /notes

Turns a Granola meeting note (typically an "Awaken - Week N" session) into a new
content-collection entry under `src/content/notes/`, which automatically appears on the
hidden `/notes` index and `/notes/week-NN` route.

---

## Step 0: Read this skill

Read this SKILL.md in full before doing anything else.

## Step 1: Find the source meeting

Use the Granola MCP tools to find the right meeting:

1. Call `granola_list_meetings` with `time_range` covering the expected week, OR
   `granola_query_granola_meetings` with a query like "Awaken Week N".
2. Confirm the meeting title/date with the user before proceeding if there is any
   ambiguity (multiple "Awaken" meetings, unclear week number, etc.).
3. Call `granola_get_meetings` with the meeting ID to fetch `<summary>`, `<private_notes>`,
   and metadata.

### Source-of-truth rules (IMPORTANT)

| Granola field        | Use for notes page? | How                                                                              |
| ------------------- | ------------------- | -------------------------------------------------------------------------------- |
| `<summary>`         | YES                 | This is Granola's AI-generated synthesis of what was discussed. It is the source for the `summary` frontmatter field and the markdown body. |
| `<private_notes>`   | **NO**              | These are the user's personal jotted notes. **Never** copy them into the site.   |
| action items        | YES                 | Use as the `actionItems` frontmatter array (lightly cleaned).                    |
| metadata (date, participants, title) | YES      | Used for frontmatter `date`, `title`.                                            |

The `summary` frontmatter field is a one-line distillation distilled from the section
headings of `<summary>` — not from `<private_notes>`.

## Step 2: Determine week number and filename

- Week number = N from the meeting title ("Awaken - Week N") if present, otherwise ask.
- Filename: `src/content/notes/week-NN.md` (zero-padded to 2 digits).
- If the file already exists, ask the user whether to overwrite or skip.

## Step 3: Write the note file

Create `src/content/notes/week-NN.md` with this structure:

### Frontmatter

```yaml
---
week: N
date: "YYYY-MM-DD"
title: "Awaken - Week N"
summary: "One-line distillation of the week's themes, derived only from <summary> section headings."
actionItems:
  - "Action item 1 (lightly cleaned from Granola action items)."
  - "Action item 2."
---
```

Do **not** include a `takeaways` field. The user's personal notes are private and must
not appear on the site.

### Body (markdown)

The body is derived from Granola's `<summary>` section. Organize it as:

1. One `## Section Name` heading per section in the `<summary>`.
2. Under each heading, render the summary's bullet points as markdown bullets.
3. Lightly clean: fix smart quotes, trim metadata noise, remove redundant whitespace.
   Keep substance verbatim — do not paraphrase or add commentary.
4. Preserve bold/italic emphasis and scripture references.
5. Preserve URLs as markdown links.
6. Do **not** invent new sections or content that is not in `<summary>`.

## Step 4: Verify schema match

The `notes` collection schema (in `src/content/config.ts`) is:

```ts
z.object({
  week: z.number(),
  date: z.string(),
  title: z.string(),
  summary: z.string().optional(),
  actionItems: z.array(z.string()).default([]),
})
```

Do not add fields outside this schema.

## Step 5: Verify build

Run from the workspace root:

```bash
npm run check   # Astro typecheck
npm run build   # should emit /notes/week-NN/index.html
```

Confirm the new page appears in the build output. If either command fails, fix and rerun.

## Step 6: Commit

```bash
git add -A
git commit -m "content: add Week N notes from Granola"
```

(Only commit when the user has asked you to commit as you go, or has explicitly approved.)

## Step 7: Report

Tell the user:
- Which Granola meeting was used (title + date)
- The new file path
- Confirm `/notes/week-NN` builds and is noindexed

---

## Corrections log (incorporate these — do not repeat the mistakes)

1. **Never use `<private_notes>` on the site.** An earlier version of this workflow
   included a "Key takeaways" block sourced from `<private_notes>`. The user asked for
   it to be removed because those are personal notes. The schema no longer has a
   `takeaways` field. Do not re-add it.

2. **The `summary` field is a synthesis of the `<summary>` section, not `<private_notes>`.**
   If unsure whether a phrase came from private notes, do not include it.

3. **Smart quotes.** Granola returns `&apos;`, `&quot;`, etc. Convert to plain
   typographic quotes in the markdown body for readability.

---

## Site context (for reference)

- Astro 4 + Tailwind 3, deployed via GitHub Pages.
- Content collections defined in `src/content/config.ts`.
- Notes index page: `src/pages/notes/index.astro`.
- Notes detail route: `src/pages/notes/[week].astro` (uses `getStaticPaths`).
- Both routes pass `noindex={true}` to `Layout.astro`.
- `public/robots.txt` has `Disallow: /notes`.
- `/notes` is intentionally not linked from `Nav.astro` or `Footer.astro` and is not in
  `public/sitemap.xml`. Do not add it.
- Prose styling for rendered note markdown lives in `.notes-prose` in
  `src/styles/global.css`.