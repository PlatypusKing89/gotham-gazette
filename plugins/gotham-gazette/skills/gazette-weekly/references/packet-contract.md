# Weekly packet and persistence

Build one working packet before prose. Reuse the existing newsroom schema if the repo already has one; otherwise adopt these concepts. Null means unknown. Zero is a real observed value.

## Working packet
- issue: season, completed_week, upcoming_week, issue_date, capture_as_of, theme, mode (draft/publish/revise).
- evidence: attachment/file ID or public source URL, page/crop/row pointer, observed value, confidence, conflict status. Keep private evidence private.
- teams: stable manager/team IDs, current team label, approved public manager label, standings record/rank/division and PF/PA only when supplied.
- games: six final paired totals as decimal strings, plus separately labeled original projections.
- lineups: slot, player, points, eligible positions, starter/bench, explicit no-game/empty/injury label, evidence pointer.
- transactions: dates, teams, players, add/drop/trade, verified source.
- next_games: six confirmed fantasy pairings with optional as-of projections.
- available_players: snapshot date, eligibility and facts actually shown. Role and health require current sources.
- computed: margins, all-play results, projection variances, bench swaps, record scope, ranking movements, index components and formula.
- editorial: lead candidates, chosen theme, board type/baseline, all-team coverage map, article structure, external citations, open questions.
- visuals: two concepts, final local assets, public paths, true dimensions, alt text/captions and factual verification.
- publication: intended branch, observed head, changed files, build/check results, actual content commit, deployment ID/state, alias verification, live checks.

## Sanitized durable memory
Keep a small newsroom/SEASON/week-N.json alongside the website source, unless the repo already has an equivalent. Preserve issue date, URL, board type/order/baseline, index/components/method version, key verified game facts, predictions with source passage, storylines and joke IDs, accepted lore, published corrections, artwork paths/dimensions, content commit, and verification status. Keep actual published facts separate from draft revisions. Do not mark prepared changes as published.

The GitHub repository is public. Do not commit raw PDF chat exports, screenshots, private contact lists, full manager names, authenticated URLs, or tokens. Necessary public evidence labels can say 'Pat-supplied Yahoo Week 9 final matchup screenshot, captured DATE', without exposing the attachment itself. Store internal artifacts only in an appropriate private destination. A public sanitized memory record is not a private evidence store.

## Weekly user input example
Create this week’s Gotham Gazette. These screenshots show Week [N] results, individual matchups and benches, standings, transactions, available players, and Week [N+1] matchups. This week’s angle: [direction]. Create the hero and editorial cartoon. [Draft for review / Publish through GitHub and Vercel].

The user can invoke the whole plugin once; do not make them call each skill separately. They can also ask for 'redo the images', 'fix the rankings', 'check the facts', or 'publish the finished issue' to route a narrow task while preserving the rest.
