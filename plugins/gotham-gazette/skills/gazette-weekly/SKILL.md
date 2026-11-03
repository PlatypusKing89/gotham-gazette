---
name: gazette-weekly
description: "Coordinate a complete weekly Gotham Gazette issue when Pat provides Yahoo screenshots and narrative direction, asks for the newspaper, or invokes Gotham Gazette. Route draft, publish, and revision requests through the seven bundled skills."
---

# Run the weekly newsroom

Read [house rules](references/house-rules.md), [league bible](references/league-bible.md), and [current integration](references/integration.md) before the first issue in a conversation. Treat these as the approved baseline, then honor newer explicit user direction. Read the live repository before editing; never treat the PDF’s old deployment state, NFL news, or roster as current.

1. Establish season, completed fantasy week, issue date in America/New_York, theme, and requested mode from attachments and the user’s words. Distinguish completed week from upcoming week. Ask only when ambiguity changes the issue. Do not silently advance to Week 9 because today’s date follows Week 8.
2. Run `gazette-intake` to inventory screenshots and reconcile final scores. Maintain a durable issue packet using [packet contract](references/packet-contract.md).
3. Read the preceding published issue, last normal power board, registry, and any existing newsroom memory. Run `gazette-analysis` for deterministic numbers, researched NFL context, and candidate stories.
4. Run `gazette-editorial` to choose the weekly theme, write all six recaps and all 12 teams, and build a clearly labeled board. Pat’s direction sets the angle, not the factual result.
5. Run `gazette-artwork` to create two separate high-resolution illustrations and check them against the fact packet. Do not stop after generating images when a full issue is requested.
6. Run `gazette-publish` to assemble and validate the real site files. For draft-only requests, deliver the review draft without production changes. For publish/do-it-all requests, proceed through GitHub and Vercel without another review round. A plain weekly creation request authorizes draft preparation; if production intent is unclear, finish the reviewable draft before asking whether to publish.
7. Run `gazette-revise-memory` to record verified publication state, predictions, ranking basis, callbacks, image paths, and corrections in the repository for future weeks.

Carry the work through all authorized steps. If one dependency fails, finish independent work, preserve the concrete draft and changes, and report the precise remaining blocker. Discover the available connector tools each run. Do not claim a connector is missing before checking. Never ask Pat to repeat account setup already verified in integration.md unless a new read shows an access problem.

The plugin is an on-demand workflow, not a background service. Tuesday 10 AM Eastern is the editorial target. Do not create a schedule, send a league email, apply for Yahoo API access, or add infrastructure unless requested. No new LLM API key is required to write in chat. If asked to automate later, inspect current capabilities and set up the separately authorized automation.

## Supporting references
- [Source decisions](references/source-decisions.md): why later rules supersede early brainstorming.
- [Packet contract](references/packet-contract.md): weekly facts and publication memory.
- [House rules](references/house-rules.md): voice, layout, images, privacy, and coverage.
- [League bible](references/league-bible.md): manager names and established history.
- [Integration](references/integration.md): actual repository, project, routes, and deployment checks.
- [Analytics](references/analytics.md): calculations, Chaos Index, and uncertainty.
