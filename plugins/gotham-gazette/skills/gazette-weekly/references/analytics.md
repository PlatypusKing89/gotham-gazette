# Calculations and uncertainty

Use Decimal values and preserve displayed precision. The bundled calculator accepts a JSON packet and writes computed JSON. It does not extract screenshots, verify sources, optimize lineups, or decide power rankings.

Run: python3 skills/gazette-analysis/scripts/calculate.py packet.json > calculated.json

Required: games with exactly six objects {a, b, score_a, score_b}; values are team IDs and decimal strings. All 12 IDs must be distinct. Optional projections is a map from team ID to original projection. Optional previous_board/current_board are ordered lists of the same 12 team IDs, with matching board_type and previous_board_type. Optional chaos_components has outcome_impact, positional_volatility, scoring_concentration, unpredictability, each 0-10. Optional bench_swaps entries have team, starter_points, bench_points, eligibility_verified=true, and source. Optional starter_totals maps team to summed displayed starter points. Missing data remains absent rather than zero-filled. Bench swaps are independent, single-swap scenarios; the calculator does not combine them.

- Margin = abs(score A - score B). Retain ties as ties.
- Weekly expected wins = (number of other teams outscored + 0.5 × tied opponents) / 11. Season expected wins sums completed weekly values. Actual wins minus expected wins estimates schedule luck; do not compute season values from one week.
- Projection variance = actual minus original projection, when comparable projections exist. Forecast misses do not prove Chaos rules caused the miss.
- Bench alternate = team actual + eligible bench score - replaced starter score. Compare with opponent. Starting-player eligibility, game locks, and pregame reasonableness need separate verification.
- Rank movement = previous published appropriate rank minus current rank; positive is up. Compare like board types only. If special weeks intervened, explicitly state the last normal baseline date/week.
- Chaos Differential = verified actual Chaos points minus points recalculated from the same underlying stats under a disclosed conventional baseline. Without both scoring definitions and full required play statistics, mark unavailable. Do not relabel projection delta as Chaos Differential.

## Weekly editorial Chaos Index, version 1
The chat locked the weights at Week 1 and the actual Week 8 source explicitly describes component grades as editorial judgments. There is no fully specified objective normalization in the source. Preserve this distinction rather than claiming a validated statistical model.

Index = 0.4 × outcome impact + 0.2 × positional volatility + 0.2 × scoring concentration + 0.2 × unpredictability. Grade each component 0-10, calculate the weighted result, and round to one decimal using decimal half-up. Publish the numeric result every completed weekly issue along with the grades and short evidence for each. Preseason can be Not Yet Rated.

Editorial anchors: 0 = little noteworthy disruption; 5 = several material swings; 10 = extraordinary league-wide disruption. Use comparable evidence across issues, do not push every week to a new high, and never score the editor’s emotional theme itself. Outcome impact can consider narrow finishes and verified lineup counterfactuals, but cannot count uncomputed standard-scoring flips. Volatility considers meaningful positional spreads; concentration considers shares of team scores; unpredictability considers evidenced projection surprises. Explain incomplete evidence.

The following non-overlapping display bands operationalize the existing five named categories consistently. They are a documented packaging convention, not a claim that the PDF specified every endpoint:

| Displayed score | Label | Color |
| --- | --- | --- |
| 0.0-1.9 | Calm | Green |
| 2.0-3.9 | Stirring | Yellow |
| 4.0-5.9 | Active | Orange |
| 6.0-7.9 | Severe | Red |
| 8.0-10.0 | Full Chaos | Dark red |

Archived reference values, to check against the actual published issue before quoting: Week 1 6.6, Week 2 8.2, Week 3 7.7, Week 4 8.9, Week 5 9.1, Week 6 7.4, Week 7 8.4, Week 8 9.4. Week 8 components 9.5, 9.2, 8.6, 10.0 produce 9.36, displayed 9.4. Do not retroactively recompute history with a new rubric without labeling the method change.
