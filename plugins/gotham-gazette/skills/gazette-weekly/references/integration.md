# Verified integration map

Inspected November 3, 2026 through the selected GitHub and Vercel apps. Refresh these reads before a later write.

| Purpose | Verified target |
| --- | --- |
| Source repository | https://github.com/PlatypusKing89/gotham-gazette |
| Repository visibility | Public |
| Default/production branch | main |
| Vercel project | gotham-gazette |
| Vercel project ID | prj_gpXFiaB5BakGMLBtIoouErovz8iZ |
| Vercel owning team ID | team_UyHeXCxIYn2CIkYgEkbQy2wY |
| Canonical site | https://www.gothamgazette.fans |
| Archive | https://www.gothamgazette.fans/archive |
| Permanent route convention | /issues/2026/week-N |
| Issue Zero | /issues/2026/issue-0 |

The current site is a Next.js App Router application. package.json at inspection has Next 15.5.21, React/React DOM 19.1.0, Node engines 22.x; Vercel project reports Node 24.x. Record this discrepancy, but do not change runtimes during a routine issue update without evidence of a build problem. Do not treat these versions as future recommendations.

## Read before editing
- Repository instructions, package.json and lockfile if present.
- app/page.js: homepage imports the latest issue’s CSS and HTML exports and holds homepage metadata.
- app/data/issues.js: named issues array, most recent first; derived issuesBySeason feeds archive.
- app/archive/page.js: archive rendering; verify behavior before changing registry shape.
- app/content/weekN.js: recent issue content. Week 8 exports week8Css and week8Html, adds scoped styles to imported week1Css, and uses String.raw HTML. Earlier Week 1 content is split across several files, so do not assume all weeks have one file.
- app/issues/2026/week-N/page.js: permanent route imports from ../../../content/weekN. Verify export/import names.
- public/: real issue image assets. Old issues may use SVG, embedded data, or API redirects. Preserve historical behavior, but use actual new high-resolution raster artwork for new issues.

Homepage metadata and permanent route metadata have different canonical URLs. Keep both correct. Update Open Graph image and declared dimensions to the real asset. Escape user text safely for the current HTML/JS context; avoid accidental template interpolation and broken String.raw delimiters.

## Publishing operations
Use GitHub connector reads and atomic tree/commit/ref updates where available; protect against stale heads. Binary uploads can use create_blob with full base64 bytes and a verified blob SHA. Discover tool schemas before calling. Keep deployment source tied to the existing repo and project. Do not invent an MCP endpoint or copy credentials into plugin files.

Vercel verification must read deployment source commit, branch, target, READY status, and aliases. A known good deployment at setup is dpl_BFZqm1rpH948sanbk39ehBAZFnmz, source commit 9b80e41ac4d1d33403ea9f16feafd3a6ed64b560. This is historical context, never a substitute for verifying a new deployment. Ignore the separate gotham-gazette-path-test project.

## Plugin dependencies and limits
The package declares the existing selected Google Drive, GitHub, and Vercel app IDs in .app.json. It reuses the user’s connections; it does not copy their tools or grant new account permissions. Image generation and current web research use available host tools. If an app is unavailable, complete the draft and state the connection needed for the remaining step. Do not claim the plugin supplies Yahoo API, an email provider, database, or scheduled job.
