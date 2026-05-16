# AGENTS.md

## Project goal

- This repository contains Jose's personal portfolio built with Astro.
- The priority is a professional, clear, and fast visual experience on mobile and desktop.

## Interface rules

- Keep a floating bottom navigation bar, always visible.
- Do not use a top header or footer on the main page.
- Keep the main content centered with a strong typographic hierarchy.
- Support both light and dark mode with readable contrast in text and controls.
- Avoid generic purple palettes; prioritize teal/cyan tones defined in the design tokens.

## Architecture and style

- Keep components small and reusable in `src/components`.
- Centralize visual tokens (colors, surfaces, typography) in `src/styles/global.css`.
- Avoid complex inline styles when reusable classes can be used.
- Preserve section IDs (`#about`, `#experience`, `#projects`, `#skills`, `#contact`) for navigation.

## Quality

- Before finalizing UI changes, run `pnpm build`.
- If scripts or behavior changes are added, validate basic keyboard and focus accessibility.
- Do not introduce new dependencies without a clear need.

## Expected agent behavior

- Read existing context first and follow repository conventions.
- Do not revert user changes unrelated to the current task.
- Propose modular and consistent changes, avoiding style duplication.
- Briefly document important decisions in the final message with file paths.
