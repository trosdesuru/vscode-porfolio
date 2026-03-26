<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the vscode-portfolio Next.js App Router project. Here is a summary of all changes made:

- **`instrumentation-client.ts`** — Created. Initializes PostHog using the Next.js 15.3+ `instrumentation-client` pattern with EU region hosts, reverse proxy ingestion, and exception capture enabled.
- **`next.config.ts`** — Added PostHog EU reverse proxy rewrites (`/ingest/static/:path*` and `/ingest/:path*`) and `skipTrailingSlashRedirect: true`.
- **`.env.local`** — Set `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` environment variables.
- **`app/page.tsx`** — Added 3 capture calls: `home_cta_clicked`, `home_secondary_cta_clicked`, and `home_social_link_clicked`.
- **`components/ProjectCard.tsx`** — Added `project_clicked` event alongside the existing Vercel Analytics `track()` call.
- **`components/ContactCode.tsx`** — Added `contact_method_clicked` event alongside the existing Vercel Analytics `track()` call.
- **`app/settings/page.tsx`** — Added `theme_changed` event alongside the existing Vercel Analytics `track()` call.
- **`components/CommandPalette.tsx`** — Added `command_palette_command_executed` and `command_palette_theme_selected` events.
- **`components/GithubProfileLink.tsx`** — Created. A new `'use client'` component wrapping the GitHub profile anchor tag to enable PostHog tracking in a Server Component context.
- **`app/github/page.tsx`** — Replaced the inline `<a>` tag with `<GithubProfileLink>` to track `github_profile_link_clicked`.
- **`app/about/page.tsx`** — Added `about_cta_clicked` event on the footer "Ver mis proyectos" CTA link.

| Event name | Description | File |
|---|---|---|
| `home_cta_clicked` | User clicks the primary CTA 'Ver Proyectos' on the home page | `app/page.tsx` |
| `home_secondary_cta_clicked` | User clicks the secondary CTA 'Ver más' on the home page | `app/page.tsx` |
| `home_social_link_clicked` | User clicks a social/external link (GitHub or Contacto) on the home page | `app/page.tsx` |
| `project_clicked` | User clicks on a project card to view the project | `components/ProjectCard.tsx` |
| `contact_method_clicked` | User clicks a contact method link (email, linkedin, whatsapp) | `components/ContactCode.tsx` |
| `theme_changed` | User changes the color theme from the Settings page | `app/settings/page.tsx` |
| `command_palette_command_executed` | User selects and executes a command from the command palette | `components/CommandPalette.tsx` |
| `command_palette_theme_selected` | User selects a theme from within the command palette | `components/CommandPalette.tsx` |
| `github_profile_link_clicked` | User clicks the 'Ver Perfil' link on the GitHub page | `components/GithubProfileLink.tsx` |
| `about_cta_clicked` | User clicks the footer CTA 'Ver mis proyectos' on the About page | `app/about/page.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics**: https://eu.posthog.com/project/147993/dashboard/588978
- **Engagement Overview** (daily trends: project clicks, contact clicks, about CTA): https://eu.posthog.com/project/147993/insights/OPhzbhg2
- **Home → Projects Conversion Funnel**: https://eu.posthog.com/project/147993/insights/0KC0E3Cz
- **Full Conversion Funnel: Home → Projects → Contact**: https://eu.posthog.com/project/147993/insights/TYfyRCOo
- **Feature Engagement: Themes & Command Palette**: https://eu.posthog.com/project/147993/insights/Otqka7jV
- **Social & Home Navigation Clicks**: https://eu.posthog.com/project/147993/insights/sU5QiqRC

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
