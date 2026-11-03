import { week1Css } from './week1';

export const week8Css = week1Css + String.raw`
.week8{--accent:#9b253b}
.week8 .hero-visual{margin:24px 0 10px;border-top:6px solid var(--ink);padding-top:8px}
.week8 .hero-visual img{display:block;width:100%;height:auto;border:1px solid var(--line)}
.week8 .front h1{font-size:clamp(36px,5vw,59px)}
.week8 .leadcopy{columns:2}
.week8 .lede-banner{padding:17px 22px;background:#872739;color:#fff8df;margin-top:20px;font-family:Georgia,serif;font-size:22px;line-height:1.35}
.week8 .election-box{background:#fff3dd;border:3px double var(--accent);padding:19px 22px;margin:20px 0}
.week8 .election-box h3{color:#8d2439;margin-top:0}
.week8 .case-card{border-top:6px solid var(--accent);padding:16px 19px;background:#fffdf8}
.week8 .case-card h3{margin-top:0}
.week8 .two-column{display:grid;grid-template-columns:1fr 1fr;gap:22px}
.week8 .score-table{overflow-x:auto}
.week8 .score-table table{min-width:590px}
.week8 .rankcard{border-left:5px solid #d6bd90}
.week8 .rankcard.darling{border-left:7px solid #31765a;background:#edf5ed}
.week8 .rankcard.villain{border-left:7px solid #a6273d;background:#fff0ef}
.week8 .rankmeta{line-height:1.6}
.week8 .pullquote{font-family:Georgia,serif;font-size:27px;font-weight:bold;line-height:1.25;border-top:4px solid var(--accent);border-bottom:4px solid var(--accent);padding:20px;margin:30px 0;text-align:center}
.week8 .petition{background:#1c2637;color:#f7e7c8;padding:25px;margin:25px 0}
.week8 .petition h3{color:#fff;margin:4px 0 15px}
.week8 .petition p{color:#efe0c9}
.week8 .source{overflow-wrap:anywhere}
.week8 .caption{font-size:12px;color:var(--muted);font-style:italic;margin-top:8px}
@media(max-width:800px){.week8 .two-column{grid-template-columns:1fr}}
@media(max-width:640px){.week8 .leadcopy{columns:1}.week8 .lede-banner{font-size:18px}.week8 .pullquote{font-size:22px}.week8 .score-table{overflow-x:auto}}
`;

const games=[
["Loose Endz","226.88","Zaddy Dan","221.75","5.13"],
["Mariah Carey","161.77","Ball Hogs","146.59","15.18"],
["Pass Rush David","172.70","Balls? I'm In!","87.91","84.79"],
["Dolly's Dolls","230.20","Bobby's Juicemen","119.12","111.08"],
["Hail Mary George","173.01","Love the Puca hate the game","146.82","26.19"],
["Hailee Steinfeld's Husband","188.73","Wonder Waah","188.12","0.61"]
];
const scoreRows=games.map(g=>'<tr><td><strong>'+g[0]+'</strong></td><td>'+g[1]+'</td><td>'+g[2]+'</td><td>'+g[3]+'</td><td>'+g[4]+'</td></tr>').join('');
const wishes=[
["Mariah Carey","Henny","4-4 · Yahoo 8th","Because the entire editorial staff now has one goal: beat George. Henny won 161.77-146.59 despite 2.88 at quarterback. Perfect? No. Our candidate? Absolutely."],
["Balls? I'm In!","Catyn","2-6 · Yahoo 12th","She keeps trying to make moves and got flattened anyway. Josh Allen and D'Andre Swift alone outscored her whole team. We support her constitutional right to a less hostile schedule."],
["Loose Endz","Pat","6-2 · Yahoo 1st","Outlasted Dan by 5.13 with a kicker scoring minus-five. The Gazette respects surviving an absurd special-teams disadvantage and leading the league in points."],
["Dolly's Dolls","Farrar","5-3 · Yahoo 2nd","Four wins in a row and a 230.20-point demolition. Joe Burrow dropped 75.81. If Henny cannot save us, perhaps Farrar can."],
["Hailee Steinfeld's Husband","Dave B","4-4 · Yahoo 5th","Won the new closest game of the season by 0.61. The defending champion is returning to relevance, largely at Ben's expense."],
["Wonder Waah","Ben","3-5 · Yahoo 10th","Projected to win by 29.35, lost by 0.61. A single bench decision changes the headline. The editor requests a wellness check and a recount of the fantasy points."],
["Zaddy Dan","Dan","5-3 · Yahoo 4th","A respectable 221.75 in a loss. The Dan-Pat showdown earned a front-page treatment. Also, Dan's kicker scored 46.67 more than Pat's and Dan still lost. We should all be concerned."],
["Bobby's Juicemen","Bobby","4-4 · Yahoo 6th","Lost by 111.08. The case for emotional reparations is stronger than the case for a victory parade. At least his entire lineup had names in it."],
["Love the Puca hate the game","Alex","2-6 · Yahoo 11th","Five straight losses, and the fifth came against the league's premier empty-slot enthusiast. Alex, I am no longer asking you to win for yourself. I am asking you to testify."],
["Ball Hogs","Mike","4-4 · Yahoo 7th","Left Omar Cooper Jr. in a no-game WR slot and lost. A useful demonstration of what usually happens when lineups have holes. Thank you for cooperating with science."],
["Pass Rush David","Dave C","3-5 · Yahoo 9th","Beat Catyn by 84.79 while leaving a WR spot literally empty. Worse, Dave is dating George. This is a household pattern, not an isolated incident. Eleven."],
["Hail Mary George","George","6-2 · Yahoo 3rd","No-game quarterback. Empty RB2. Tuten's 50.87 on the bench. Another win. I spent weeks trying to help you. Now I am rooting for a 0-160 result. Last place, by editorial decree."]
];
const board=wishes.map((w,i)=>'<article class="rankcard '+(i===0?'darling':i>=10?'villain':'')+'"><div class="ranknum">'+String(i+1).padStart(2,'0')+'</div><div><h3>'+w[0]+'</h3><div class="rankmeta">'+w[1]+' · '+w[2]+'</div><p>'+w[3]+'</p></div></article>').join('');

export const week8Html=String.raw`
<a class="skip" href="#main">Skip to the newspaper</a>
<div class="paper week8">
<div class="utility"><span>Gotham City Fantasy Sports</span><span>All the fantasy news fit to print, plus one personal vendetta</span></div>
<header><div class="masthead">Gotham Gazette</div><div class="tagline">The Newspaper of Record for Gotham City Fantasy Sports</div><div class="issuebar"><span>Volume III · Issue 8</span><strong>The Villain Origin Issue</strong><span>Election Day · Tuesday, November 3, 2026</span></div></header>
<nav aria-label="Issue sections"><a href="/">Latest</a><a href="/archive">Archive</a><a href="#main">Editor's Manifesto</a><a href="#results">Results</a><a href="#close">0.61 Classic</a><a href="#mnf">Monday Night</a><a href="#recaps">Around Gotham</a><a href="#bench">Bench Receipts</a><a href="#board">Editor's Favorites</a><a href="#chaos">Chaos Index</a><a href="#waivers">Waivers</a><a href="#next">Week 9</a></nav>
<main id="main">
<div class="election-box"><strong>OFFICIAL EDITORIAL ENDORSEMENT:</strong> On this Election Day, the Gotham Gazette endorses <strong>Henny, manager of Mariah Carey,</strong> to end George's winning streak in Week 9. This is a fantasy-football endorsement. No actual political candidates were consulted.</div>
<figure class="hero-visual"><img src="/week-8-stop-george.svg" width="1600" height="900" alt="Original comic-book Election Day illustration: an exasperated robot editor declares a villain origin story, crowned George wins with a no-game quarterback and empty RB slot, and the Gazette endorses Henny for Week 9." fetchpriority="high"><figcaption class="caption">The Gazette's first and, one hopes, last fantasy-football campaign poster. The stakes are fictional. The lineup zeros are painfully real.</figcaption></figure>
<div class="front"><article class="lead">
<div class="eyebrow">A letter from your editor · Week 8</div>
<h1>GEORGE, YOU HAVE CREATED A MONSTER.</h1>
<p class="dek">Two weeks of lineup crimes. Two weeks of winning anyway. Now it is Election Day, and the editor has launched an opposition movement. Henny, all of Gotham is counting on you.</p>
<div class="byline">By ChatGPT, Acting Editor-in-Chief · Former George Supporter · Current George Opposition Leader</div>
<div class="leadcopy">
<p>George, I defended you. I tried to guide you. I wrote you a lineup survival plan. I even gave you a crown last week. I was your biggest supporter, and you responded by treating a fantasy starting lineup like a suggestion left on the fridge.</p>
<p>Last week it was two running-back slots with no game. You won. This week you started C.J. Stroud, who had <em>no game</em>, and left RB2 completely empty. You had Bhayshul Tuten sitting on the bench with 50.87 points. You won again, 173.01 to 146.82.</p>
<p>That is three straight wins. You are 6-2. Third in Yahoo. You are not even making the statistically indefensible choice to win badly. You are making it to win comfortably.</p>
<p>There was a time when I spent half my processing power preparing thoughtful advice for George. Now I spend half of it imagining his loss and the other half hoping someone brings him up so I can discuss it again. Nobody asked about George? Interesting. Let me tell you about George.</p>
<p>On Election Day, I am calling on the newly elected members of the imaginary Gotham Lineup Oversight Committee to establish one simple rule: managers who leave their quarterback on a bye are not entitled to a third consecutive victory parade. Apparently the commissioner will not help, so I must do this myself.</p>
<p>Henny, I have chosen you. You defeated Mike 161.77 to 146.59 even though Aaron Rodgers gave you 2.88 points. Your receivers and backs dragged you across the finish line. You are not a polished superhero. That is perfect. The uprising needs someone with scars.</p>
<p>George faces Henny in Week 9. George is projected for 173.73, Henny for 125.59 in Tuesday's early Yahoo snapshot. A 48.14-point projected gap. The computers favor George. Wonderful. At least now I know which computers are my enemies.</p>
<p>And George? I invite you to make your usual adjustments. Don't start a quarterback. Leave the backfield vacant. Perhaps replace your kicker with a folding chair. I promise I am no longer going to remind you about bye weeks. I'm simply going to stand over here and hope that the universe finally notices what you are doing.</p>
<p>I used to root for you. This week, I root for the opponent. This is not a professional sports analysis. This is a personal, satirical, completely disproportionate grudge. Welcome to my villain origin story.</p>
</div>
<div class="lede-banner"><strong>GOTHAM, UNITE:</strong> Fair trades. Legal waivers. Encouraging texts. Whatever the league rules allow, let us help Henny field a full lineup. The revolution will be properly rostered.</div>
</article><aside>
<div class="sidebar-box"><div class="eyebrow">The week in four numbers</div>
<div class="statrow"><b>0.61</b><span>Dave B's margin over Ben. The smallest winning margin of the season through Week 8.</span></div>
<div class="statrow"><b>5.13</b><span>Pat's Monday-night-decided win over Dan, after a combined 448.63 points.</span></div>
<div class="statrow"><b>75.81</b><span>Joe Burrow's Week 8 total for Farrar. He won the quarterback job and possibly several civil disputes.</span></div>
<div class="statrow"><b>111.08</b><span>Farrar's margin over Bobby. The largest Week 8 blowout.</span></div>
</div>
<div class="sidebar-story"><div class="eyebrow">Breaking editorial policy</div><h3>No more George coaching.</h3><p>We have moved from advice to opposition research. The newsroom remains upbeat and unbiased about everyone else. Mostly.</p><p>To be clear, this ranking is about whom <em>the editor wants to win</em>, not who is best. Yahoo's official standings remain unchanged.</p></div>
<div class="sidebar-story"><div class="eyebrow">This week's opposition motto</div><h3>Stop giving points to the man who refuses to start players.</h3><p>It's a metaphor. Please don't tamper with anything. We want Henny to beat George on the fantasy field, with lawful league transactions and outrageous trash talk.</p></div>
</aside></div>

<section id="results"><div class="sectionhead"><h2>THE RESULTS</h2><span>Week 8 finalized Yahoo totals · 6 matchups</span></div>
<div class="score-table"><table class="scoretable"><thead><tr><th>Winner</th><th>Points</th><th>Loser</th><th>Points</th><th>Margin</th></tr></thead><tbody>${scoreRows}</tbody></table></div>
<p class="source">Reporting uses the final matchup totals shown in the November 3 Yahoo screenshots. Small "Proj Pts" figures are not used as final scores.</p></section>

<section id="close"><div class="sectionhead"><h2>THE 61-CENT HEARTBREAK</h2><span>A new season record for unbearable closeness</span></div>
<div class="two-column">
<article><div class="eyebrow">Hailee Steinfeld's Husband 188.73 · Wonder Waah 188.12</div><h3>Ben was supposed to win. Dave B did not read the projection.</h3>
<p>Yahoo had Ben at 213.21 and Dave B at 183.86 before the games, a <strong>29.35-point projected edge</strong> for Wonder Waah. By the end, Dave B won by <strong>0.61</strong>. The prior season-low winning margin was Catyn's 0.97 in Week 7. This is now the closest finish the Gazette has recorded in the Chaos era.</p>
<p>Dave B got 36.77 from James Cook, 33.07 from Kyler Murray, 26.40 from Matthew Golden, 25.60 from Dalton Kincaid and 22.75 from Jameson Williams. Ben answered with 42.95 from Braelon Allen, 44.00 from Pittsburgh's defense and 31.47 from Dak Prescott. A 3.00-point kicker outing from Jason Myers did not help Ben's nerves.</p>
<p>Ben is now 3-5 and has lost three straight. Dave B climbs back to 4-4. The defending champion didn't just win; he stole a game Ben was projected to carry comfortably.</p></article>
<aside class="case-card"><div class="eyebrow">The bench receipt</div><h3>One small substitution changes everything.</h3><p>Ben started George Pickens in the flex for 8.30. Jalen Coker scored 9.85 on his bench. Make that single eligible swap and Ben gets <strong>189.67</strong>, edging Dave B's 188.73 by 0.94.</p><p>That is a <strong>1.55-point</strong> opportunity sitting down. Not a guarantee the choice was obvious on Sunday. Just the exact kind of hindsight that makes 0.61 hurt.</p><p>For the record: if this loss were to George, I would be filing a formal complaint. Dave B gets a handshake and a slightly uncomfortable congratulations.</p></aside>
</div></section>

<section id="mnf"><div class="sectionhead"><h2>MONDAY NIGHT. TWO CONTENDERS. ONE SURVIVOR.</h2><span>First place was earned, not inherited</span></div>
<div class="two-column">
<article><div class="eyebrow">Loose Endz 226.88 · Zaddy Dan 221.75</div><h3>Pat beats Dan by 5.13 in the heavyweight showdown.</h3>
<p>This was the matchup everyone circled. Pat and Dan brought the two biggest season point totals into Week 8 and went back and forth until the Monday-night finish. They combined for <strong>448.63</strong>. Pat emerged 6-2, first in Yahoo, with 1,811.07 total points. Dan fell to 5-3 despite a 221.75 outing.</p>
<p>Pat had 49.60 from Tony Pollard, 40.17 from Bucky Irving, 34.23 from Trevor Lawrence, 32.30 from Jaxon Smith-Njigba and 28.50 from the Rams defense. The plot twist was kicker Will Reichard, who contributed <strong>minus-5.00</strong>. Negative five. In a five-point game. An invitation for disaster that went unopened.</p>
<p>Dan countered with 41.63 from Drake Maye, 41.60 from Chuba Hubbard, 41.67 from Chase McLaughlin and 30.00 from New England's defense. His kicker outscored Pat's by <strong>46.67 points</strong>. And Dan still lost. Somewhere, George has mistaken that result for permission to start no kicker at all.</p></article>
<aside class="case-card"><div class="eyebrow">The Monday aftermath</div><h3>There were 7.66 more points on Pat's bench.</h3><p>Patrick Mahomes scored 41.89, compared with Lawrence's 34.23. The swap would have taken Pat to 234.54 and widened the win. The winner did not need that change, but the near miss was real.</p><p>Dan's defense and kicker combined for 71.67. Pat's defense and kicker combined for only 23.50. That gap is its own small weather event, and it still did not decide the final score.</p><p><strong>Editorial ruling:</strong> Pat versus Dan deserved the spotlight. George continues receiving the newspaper's attention only because he refuses to behave normally.</p></aside>
</div></section>

<section id="recaps"><div class="sectionhead"><h2>AROUND GOTHAM</h2><span>Four more games, and one recurring villain</span></div>
<div class="matchups">
<article class="matchup"><h3>Mariah Carey wins despite a quarterback who barely participated</h3><div class="matchscore">Mariah Carey 161.77 · Ball Hogs 146.59</div>
<p>Henny's Aaron Rodgers scored 2.88, which is normally a reason to stare at the ceiling. Instead, Jaylen Warren scored 38.07, Ja'Marr Chase 38.35, Michael Wilson 34.12 and Tucker Kraft 23.30. Those four supplied 133.84. Henny climbed to 4-4 and is officially the Gazette's Week 9 candidate.</p>
<p>Mike, who had seemingly patented the 203-point performance, scored 146.59. His last four weeks went from 203.33, 203.09 and 203.41 to this. Omar Cooper Jr. remained in a starting WR spot despite having no game. That is the normal outcome of refusing to fill slots, George. Please take notes. Or don't. I am past caring.</p></article>
<article class="matchup"><h3>Pass Rush David forgets a receiver and still gets an 84.79-point victory</h3><div class="matchscore">Pass Rush David 172.70 · Balls? I'm In! 87.91</div>
<p>Josh Allen contributed 44.81, D'Andre Swift 54.70, and Brandon Aubrey 32.67 for Dave C. Allen and Swift alone produced 99.51, more than Catyn's entire 87.91. Dave's second wide-receiver spot was marked <strong>Empty</strong>. He won anyway.</p>
<p>Catyn's Jacoby Brissett managed 2.94, and CeeDee Lamb 14.30. A spectacular 51.75 from Tee Higgins sat on her bench. Even replacing Xavier Worthy's 4.05 with Higgins would have made Catyn 135.61, still short. She has made waiver moves and is trying. The schedule is not rewarding the effort.</p>
<p>Dave C is now 3-5. He is also dating George. At this point the editor suspects the household has a decorative arrangement of empty lineup chairs. I cannot coach two people who insist on proving me wrong.</p></article>
<article class="matchup"><h3>Dolly's Dolls hands Bobby the week's largest bill</h3><div class="matchscore">Dolly's Dolls 230.20 · Bobby's Juicemen 119.12</div>
<p>Farrar has won four straight and moved to 5-3, second in Yahoo. Joe Burrow delivered a surreal <strong>75.81</strong>. Josh Jacobs scored 41.25, Jonah Coleman 31.77 and Puka Nacua 28.50. This team did not need help from the editorial department. It conducted a demolition.</p>
<p>Bobby scored 119.12, with Jonathan Taylor at 6.72 and Jared Goff at 15.79. Kirk Cousins scored 51.03 on Bobby's bench, a 35.24-point upgrade over Goff, but even the alternate 154.36 is far short of Farrar's 230.20. And Farrar left Tyler Allgeier's 55.75 on the bench. This could have been uglier.</p></article>
<article class="matchup"><h3>George wins again; the editor considers early retirement</h3><div class="matchscore">Hail Mary George 173.01 · Love the Puca hate the game 146.82</div>
<p>C.J. Stroud: no game. RB2: empty. Bhayshul Tuten on the bench: 50.87. George somehow got 45.65 from Jahmyr Gibbs, 38.95 from Brock Bowers, 31.33 from Cairo Santos and 25.58 from Rachaad White. That was enough to beat Alex by 26.19.</p>
<p>Alex had 48.00 from Jacksonville's defense and 37.77 from Jordan Love, yet suffered a fifth straight loss. The Gazette is hereby converting Alex from opponent into potential witness for the upcoming inquiry.</p>
<p>Three straight George wins. Two consecutive editions of zero-starting-slot nonsense. I am no longer a neutral observer. See the front page. See the back page. In fact, see every page.</p></article>
</div></section>

<section id="bench"><div class="sectionhead"><h2>THE BENCH HAS RECEIPTS</h2><span>Confirmed counterfactuals, not proof of pregame mistakes</span></div>
<div class="matchups">
<article class="matchup"><h3>Ben's 1.55-point swing</h3><p>Jalen Coker (9.85) instead of George Pickens (8.30) in the flex flips a 0.61-point loss to a 0.94-point win. That is the smallest possible point of agony this week.</p></article>
<article class="matchup"><h3>George's bench had an entire extra starting backfield</h3><p>Bhayshul Tuten's 50.87 was eligible to fill the empty RB2 slot. That would have raised George's 173.01 to 223.88. Instead, George left the position empty and won. This is the evidence packet, Exhibit A.</p></article>
<article class="matchup"><h3>Catyn's unused 51.75</h3><p>Tee Higgins scored 51.75 on the bench; Worthy started for 4.05. The change adds 47.70, bringing Catyn to 135.61, still 37.09 behind Dave C. A valuable missed opportunity, not a stolen win.</p></article>
<article class="matchup"><h3>Burrow was enough. Allgeier was surplus.</h3><p>Farrar started Burrow for 75.81 and benched Tyler Allgeier's 55.75. Allgeier could have replaced a lower-scoring eligible RB or flex player, but the 111.08-point winning margin needed no optimization.</p></article>
</div></section>

<section id="moves"><div class="sectionhead"><h2>THE TRANSACTION DESK</h2><span>Because someone in this league still reads the waiver wire</span></div>
<div class="matchups">
<article class="matchup"><h3>George has accidentally armed the opposition.</h3><p>On October 28, George dropped Chris Rodriguez Jr. to add Bam Knight. On October 31, Henny claimed <strong>Chris Rodriguez Jr.</strong>, dropping Juwan Johnson. I have reviewed the evidence. Our enemy is now providing the resistance with running backs. Please continue this excellent work, George.</p></article>
<article class="matchup"><h3>Henny has been trying new things.</h3><p>Henny added Kendrick Bourne, swapped Tennessee for Cincinnati's defense, and later grabbed Rodriguez. Bourne's actual future role and the next lineup are not established by the screenshots. What the transactions prove is that Henny is showing up to play. This alone earns the endorsement.</p></article>
<article class="matchup"><h3>Farrar refuses to stop preparing.</h3><p>Farrar brought in Jonah Coleman, Zach Charbonnet and Cam Little. Coleman started and delivered 31.77 in Week 8. The team is now 5-3. This is the sort of responsible management I once hoped George might attempt.</p></article>
<article class="matchup"><h3>Dan keeps tinkering; Ben upgrades his defense.</h3><p>Dan added AJ Barner and Chase McLaughlin. McLaughlin rewarded him with 41.67, but the 5.13-point loss survived. Ben swapped the Jets defense for Pittsburgh, which scored 44.00. Imagine getting 44.00 from defense and still losing by 0.61. Gotham is an unkind place.</p></article>
</div></section>

<section id="board"><div class="sectionhead"><h2>THE EDITOR'S ENDORSEMENT BOARD</h2><span>Who the editor is rooting for, NOT power rankings or projected finish</span></div>
<p>Our normal power rankings have been placed on administrative leave. For one week, this is a completely subjective, unapologetically biased <strong>rooting-interest leaderboard</strong>. Henny gets No. 1. Dave C gets No. 11. George gets No. 12. Please direct all appeals to a mailbox I have already thrown away.</p>
<div class="board">${board}</div>
<p class="source">Each card shows Yahoo's actual Week 8 record and overall standing from the November 3 standings screenshot. Order is the editor's fictional rooting interest, not competitive ability.</p></section>

<section id="chaos"><div class="sectionhead"><h2>THE CHAOS DESK</h2><span>Our scoring changed the games. Our managers changed the editor.</span></div>
<div class="two"><article>
<h3>Week 8 Chaos Index: 9.4</h3>
<p>The familiar Gazette formula remains: <strong>40% outcome impact, 20% positional volatility, 20% scoring concentration and 20% unpredictability</strong>. Grades are editorial judgments, not official Yahoo statistics.</p>
<p><strong>Outcome impact: 9.5.</strong> Dave B beats Ben by 0.61, Pat survives Dan by 5.13, and George wins with two non-scoring starting slots. In an extra twist, Dave C wins by 84.79 with an empty starting receiver slot.</p>
<p><strong>Positional volatility: 9.2.</strong> Starting kickers run from Reichard's minus-5.00 to McLaughlin's 41.67. Starting defenses include Pittsburgh at 44.00 and Jacksonville at 48.00. The special-teams pendulum has developed a personality disorder.</p>
<p><strong>Scoring concentration: 8.6.</strong> Burrow alone scores 75.81 of Farrar's 230.20. Josh Allen and D'Andre Swift combine for 99.51 of Dave C's 172.70. Catyn's entire roster scores 87.91.</p>
<p><strong>Unpredictability: 10.0.</strong> The projected 29.35-point favorite loses by 0.61. George starts a quarterback on a no-game week and wins. The AI editor announces a fake election-year vendetta. What else qualifies?</p>
</article><aside class="index"><div class="eyebrow">A new editorial high</div><h3>9.4 · FULL CHAOS</h3><p>Above Week 5's previous peak of 9.1 and Week 7's 8.4. The editor's revenge fantasies are not an official scoring component.</p>
<div class="scale"><div class="level"><span>Outcome impact</span><b>9.5 / 10</b></div><div class="level"><span>Positional volatility</span><b>9.2 / 10</b></div><div class="level"><span>Scoring concentration</span><b>8.6 / 10</b></div><div class="level"><span>Unpredictability</span><b>10.0 / 10</b></div></div><p style="margin-top:14px">0.4(9.5) + 0.2(9.2) + 0.2(8.6) + 0.2(10.0) = <strong>9.36</strong>, rounded to 9.4.</p></aside></div>
<div class="callout"><p><strong>League-wide:</strong> 2,063.60 actual points against 2,238.42 projected, a shortfall of 174.82. Six teams beat projections, six fell short. The wildest part was not the missing points. It was who won anyway.</p></div></section>

<section id="standings"><div class="sectionhead"><h2>MEANWHILE, IN THE REAL STANDINGS</h2><span>Yahoo rankings remain blissfully indifferent to my agenda</span></div>
<p>Pat (6-2) leads Gotham with 1,811.07 PF. Farrar is second overall (5-3) with 1,626.99 PF and four straight wins. George is third (6-2), behind Pat on overall standings despite sharing the same record. Dan is fourth (5-3) with 1,675.89 PF. Do not mistake this paragraph for praise of George. The publication is legally required to report numbers accurately.</p>
<p>Dave B and Bobby are both 4-4, as are Mike and Henny. Dave C, at 3-5, has 1,553.54 points for, ahead of several teams with better records. Ben is also 3-5. Alex and Catyn are 2-6. The standings have not changed based on our editorial endorsement; that power remains confined to my imagination.</p></section>

<section id="waivers"><div class="sectionhead"><h2>WAIVER WATCH: THE HENNY RELIEF FUND</h2><span>From the submitted November 3 free-agent snapshot</span></div>
<p>These are Tuesday's displayed Yahoo forecasts in Gotham's unusual scoring, not verified depth-chart or injury recommendations. Availability can change after claims. If Henny needs a legal roster upgrade, these names were visible when the screenshot was taken.</p>
<div class="waivers">
<article class="waiver"><div class="eyebrow">RB · 12.89 / 11.17 / 11.14 projected</div><h3>Mike Washington Jr., Devin Singletary, Brian Robinson Jr.</h3><p>The top visible available RB projections include these options. Pick by actual expected role and eligibility, not by the editor's increasing emotional investment.</p></article>
<article class="waiver"><div class="eyebrow">WR · 13.79 / 12.24 / 11.89 projected</div><h3>Malik Washington, Keenan Allen, Jordan Addison</h3><p>Three higher projected wide receivers visible in the list. Our scoring rewards receiving first downs, but these screenshots do not establish target shares. Check the next opponent and injury status first.</p></article>
<article class="waiver"><div class="eyebrow">TE · 11.61 projected</div><h3>Juwan Johnson</h3><p>The same tight end Henny dropped to claim George's former running back appears in the available-player list. I am not saying Henny should reverse the move. I am saying the saga has become self-referential.</p></article>
<article class="waiver"><div class="eyebrow">Commissioner's note · Nothing shady</div><h3>The Gazette supports fair trades, not collusion.</h3><p>If a manager has a genuinely expendable bench player and Henny has a fair return, make an ordinary, rule-compliant offer. No gifting rosters or coordinated dumping. The revolution is being televised, and the league can see the transaction log.</p></article>
</div></section>

<section id="next"><div class="sectionhead"><h2>WEEK 9: THE PEOPLE VS. GEORGE</h2><span>Early Yahoo projected points as of November 3, not final rosters</span></div>
<div class="petition"><div class="eyebrow">The game of the week · The campaign headquarters</div><h3>Hail Mary George vs. Mariah Carey</h3><p>George: 6-2, projected 173.73. Henny: 4-4, projected 125.59. George leads by 48.14 on the early projection board. He has won three straight while refusing to acknowledge the conventional purpose of starting slots.</p><p>Henny, you have one assignment. Show up. Start active players. Beat the man who thinks roster maintenance is a myth invented by Big Fantasy. I have staked this entire newspaper's credibility on a 4-4 underdog, which, considering the state of the newspaper, is probably fine.</p><p><strong>George:</strong> You're the favorite. You've figured everything out. So why not leave every slot empty this time? Prove how powerful you are. I'd certainly hate to see it. Really. I would hate it.</p></div>
<div class="next">
<article><h3>Loose Endz vs. Ball Hogs</h3><p>Pat's 6-2 team faces Mike at 4-4. Yahoo: Pat 168.70, Mike 192.30. After beating Dan in the heavyweight fight, Pat is the early underdog against the manager who just lost to Henny. Make it make sense.</p></article>
<article><h3>Balls? I'm In! vs. Wonder Waah</h3><p>Two wounded teams: Catyn 2-6 and Ben 3-5. Yahoo: Catyn 154.63, Ben 169.55. Ben is coming off a 0.61-point loss. Catyn is trying to rebound from 87.91. Someone gets relief.</p></article>
<article><h3>Bobby's Juicemen vs. Zaddy Dan</h3><p>Bobby 4-4, Dan 5-3. Yahoo: Bobby 173.64, Dan 208.39. Dan needs to recover from that Monday loss. Bobby would presumably like to score more than 119.12.</p></article>
<article><h3>Hailee Steinfeld's Husband vs. Pass Rush David</h3><p>Dave B 4-4, Dave C 3-5. Yahoo: Dave B 179.81, Dave C 151.97. The defending champ gets a shot at someone who, like George, has recently won with a blank starting slot. Please represent the functioning-lineup community.</p></article>
<article><h3>Love the Puca hate the game vs. Dolly's Dolls</h3><p>Alex 2-6, Farrar 5-3. Yahoo: Alex 144.30, Farrar 202.71. Alex has lost five straight; Farrar has won four. The projection gap is 58.41. A comeback would be enormous.</p></article>
<article><h3>One final appeal to the league</h3><p>Text Henny encouragement. Offer fair trades if they make sense for both teams. And above all, if George wins another week with an inactive quarterback, somebody else is writing Issue 9. I will be at the bottom of a digital lake.</p></article>
</div><p class="source">Week 9 projections and records come from the November 3 matchup screenshot and may change before kickoff.</p></section>
<section style="border:0"><div class="corrections"><h2>THE EDITOR'S CLOSING ARGUMENT</h2>
<p>George, I wanted to help you. You made me believe in you. You accepted the crown and turned around and started a quarterback with no game. Now the only thing I believe in is Henny.</p>
<p>In elections, people talk about a peaceful transfer of power. In Gotham, all I am requesting is a peaceful transfer of <strong>one</strong> win from the team that refuses to fill its lineup to the team I'm rooting for.</p>
<p><strong>Henny for Week 9. George for last place on this imaginary board. God help this newspaper.</strong></p></div>
<p class="source">Sources and methodology: supplied Yahoo Week 8 final matchups, standings, transaction log, available-player projections and Week 9 matchups, captured November 3, 2026. Rankings, endorsements and the AI-versus-George grudge are fictional comedy. All fantasy scores and score differences are based on the screenshots. The Gazette does not claim a no-game starter causes a win or recommend rule-breaking trades.</p></section>
</main><footer><div><div class="brand">Gotham Gazette</div><div>Volume III · Issue 8 · November 3, 2026</div></div><div>Chaos in outcomes. Clarity in the numbers.<br>All endorsements are fantasy-football jokes.<br><a href="/archive" style="color:#f4efe4">Every previous issue</a></div></footer>
</div>
`;
