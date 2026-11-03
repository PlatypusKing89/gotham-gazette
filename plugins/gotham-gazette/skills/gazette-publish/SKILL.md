---
name: gazette-publish
description: "Assemble and publish an authorized Gotham Gazette issue or revision through PlatypusKing89/gotham-gazette and its existing Vercel project. Verify permanent routes, homepage, archive, metadata, images, and deployment status."
---

# Ship a complete issue

Read [integration](../gazette-weekly/references/integration.md), current repository files, and relevant available GitHub/Vercel tool descriptions. Use the existing project. Discover exact schemas before acting, and inspect actual connector availability rather than relying on a previous chat’s limitations.

Confirm season, week, requested mode, target repository, project, environment, and current branch head. Read repository instructions. Prepare all files and assets as one coherent change on a work branch or checkout. Do not mutate production during a draft-only request. In a publishing request, do all authorized work without pausing for another approval. Follow explicit no-review authorization. Publishing the plugin itself is separate from publishing a newspaper issue.

Preserve all previous issue routes and content unless a correction is specifically requested. Add the new content module and permanent route; point app/page.js at the new content; add exactly one registry entry; update titles, date, canonical URLs, Open Graph assets, captions, and all navigation links. Read current export names and relative imports rather than guessing. Reuse working CSS and add scoped styles. Do not replatform or upgrade dependencies for a content update unless necessary to resolve an observed blocker.

Reopen and decode both artwork files, verify exact public filenames and references, and build the real Next.js project using its package manager/lockfile. Run meaningful checks for six unique matchups, 12 unique teams, numeric consistency, board type/baseline, Chaos arithmetic, source links, privacy, dates, metadata, and archive uniqueness. Check responsive behavior near 390 px and 1440 px, especially columns, Corrections overflow, tables, hero cropping, navigation, and captions. Report any unperformed visual check accurately.

For publication, commit the complete change through GitHub using the observed branch head and conflict protection. Prefer an atomic tree/commit operation or a single reviewed local commit over sequential production writes that temporarily break imports. Respect repository branch protections. If main changed, reread and reconcile; never force-push. Do not include raw screenshots, contact details, PDF chat exports, credentials, or authenticated links in this public repository.

Inspect Vercel’s deployment tied to the exact new commit and existing team/project. Wait for READY; if failed, read build logs, fix the cause, and recheck the replacement. Do not treat 'accepted', a successful GitHub commit, or the previous READY deployment as proof the new issue shipped. Do not create a duplicate project or deploy only HTML into this Next.js app. Verify the production aliases point to the new deployment, not a stale one. Only promote or adjust aliases within the authorized publishing scope.

Fetch the production custom domain, permanent issue URL, archive, and both assets. Check actual issue headline/week, all relevant links, content types, decodable image content, and no missing-image response masquerading as HTTP 200. Use a supported browser or rendering path for visual QA when available. Verify the archive lists the new issue once and retains prior routes. Ensure the homepage and permanent copy agree.

Return clickable latest/permanent/archive links with the actual commit and deployment status. Distinguish preparation, committed, building, failed, READY, and live-verified. If anything is blocked, state exactly what is completed and the smallest remaining action. Do not ask Pat to upload files manually unless all available binary-safe tools were checked and cannot complete it. Do not email anyone from this skill.
