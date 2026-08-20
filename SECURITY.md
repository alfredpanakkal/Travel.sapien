# Security Keys & External Dependencies

This file documents the environment variables required for the project.

- `VITE_SANITY_PROJECT_ID`: (Public) The Sanity project ID, used by Vite to fetch content at runtime. E.g. `g0khk2re`.
- `VITE_SANITY_DATASET`: (Public) The Sanity dataset to use. Defaults to `production`.
- `SANITY_STUDIO_PROJECT_ID`: (Public) The Sanity project ID for the Sanity Studio (falls back to VITE_SANITY_PROJECT_ID).
- `SANITY_TOKEN`: (Secret) A real secret used only locally (via `.env`) or in seed scripts to authenticate writes to the CMS. **NEVER deploy this key or leak it to the browser bundle.**

## Sanity Configuration
The CMS Studio is embedded into `/studio` and built into `/dist/studio` during Vercel deployment.
