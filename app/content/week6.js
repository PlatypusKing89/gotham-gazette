import { week1Css } from './week1';

export const week6Css = week1Css + `
.triage-note{margin:0 36px 8px;padding:12px 16px;border-left:5px solid #8d1b22;background:#f1eadf;font-family:Georgia,serif;font-size:14px;line-height:1.45}
.checklist{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px;margin-top:18px}
.checkitem{border-top:4px solid #111;padding:14px;background:#f7f1e5}
.checkitem h3{margin:0 0 7px;font-size:24px}
.checkitem p{margin:0}
@media(max-width:700px){.triage-note{margin:0 14px 8px;font-size:13px}.checklist{grid-template-columns:1fr}}
`;

export const week6Html = String.raw`
<a class="skip" href="#main">Skip to the newspaper</a>
<div class="paper">
<div class="utility"><span>Gotham City Fantasy Sports</span><span>Established 2024 · Chaos era 2026</span></div>
<header>
  <div class="masthead">Gotham Gazette</div>
  <div class="tagline">The Newspaper of Record for Gotham City Fantasy Sports</div>
  <div class="issuebar"><span>Volume III · Issue 6</span><strong>Week 6</strong><span>Tuesday, October 20, 2026</span></div>
</header>
<nav aria-label="Issue sections">
  <a href="/">Latest</a><a href="/archive">Archive</a><a href="#main">Front Page</a><a href="#results">Results</a><a href="#gotham">Around Gotham</a><a href="#triage">Lineup Triage</a><a href="#injuries">Injury Desk</a><a href="#kicker">Kicker Crisis</a><a href="#moves">Roster Moves</a><a href="#chaos">Chaos Desk</a><a href="#board">The Board</a><a href="#waivers">Waivers</a><a href="#next">Week 7</a>
</nav>
<div class="triage-note"><strong>Public service announcement:</strong> a bye is not an injury, an injury is not a bye, and Yahoo does not care that both look like zero after kickoff. Welcome to the part of the season where managing the roster matters as much as drafting it.</div>

<main id="main">
<div class="front">
<article class="lead">
  <div class="eyebrow">Week 6 • The lineup-management portion of the exam</div>
  <h1>THE BYE WEEKS ARRIVED. SOME LINEUPS DID NOT.</h1>
  <p class="dek">Catyn finished with multiple no-game starters. George added C.J. Stroud and got 40.15. Every team in the Great Molasses Flood is now 3-3. Dan is 5-1. The standings are separating while one entire division refuses to.</p>
  <div class="byline">By the Gotham Gazette Sports Desk</div>
  <figure class="hero-visual">
    <img src="/week-6-lineup-triage.svg" alt="Gotham Lineup Triage graphic showing Thursday morning, Sunday morning, and kickoff as three lineup checkpoints.">
    <figcaption class="caption">Check Thursday. Check Sunday. Swap before kickoff. Repeat until January or emotional collapse.</figcaption>
  </figure>
  <div class="leadcopy">
    <p>Week 6 was the first real test of roster maintenance. Byes stacked up. Injury designations changed. Players went to injured reserve. The managers who checked twice survived. The managers who did not left empty chairs at the table.</p>
    <p>George provided the clean example. He added C.J. Stroud on Wednesday, started him, and received 40.15 points. Catyn added Kendre Miller and got a useful 20.33, but still left Jalen Hurts, Quinshon Judkins, Tyler Warren, and Jake Bates in no-game spots. Balls? I'm In! finished at 88.18.</p>
    <p>The other headline is in the standings. Zaddy Dan is 5-1. Loose Endz and Hail Mary George are 4-2. Meanwhile, every single team in the Great Molasses Flood division is 3-3. Six teams. Same record. It is less a division than a waiting room.</p>
    <p>Farrar beat Ben by 3.82 in the latest household showdown. Dave B beat Henny by 135.76. Mike got back in the win column. Pat beat Alex. Dan handled Dave C. George beat Catyn by 115.37, the sort of margin that normally requires a zoning permit.</p>
    <p>And outside Gotham, the Rams managed to turn one kicker problem into two. They cut the biggest kicker in the league, signed one of the smallest, watched him make one field goal, and then lost him for the season when he tried to tackle a returner. This issue is about roster management, but sometimes the roster simply manages you.</p>
  </div>
</article>

<aside>
  <div class="sidebar-box">
    <div class="eyebrow">Week 6 in four numbers</div>
    <div class="statrow"><b>6</b><span>Great Molasses Flood teams at exactly 3-3.</span></div>
    <div class="statrow"><b>115.37</b><span>George's margin over Catyn, the week's biggest blowout.</span></div>
    <div class="statrow"><b>3.82</b><span>Farrar's margin over Ben in the household showdown.</span></div>
    <div class="statrow"><b>7.4</b><span>Week 6 Chaos Index. Severe, but below the last two weeks.</span></div>
  </div>
  <div class="sidebar-story">
    <div class="eyebrow">The Flood is level</div>
    <h3>All six teams are 3-3.</h3>
    <p>Mike, Bobby, Farrar, Ben, Dave B, and Henny have achieved perfect divisional gridlock.</p>
    <p>One game separates second place from ninth in the overall standings.</p>
  </div>
</aside>
</div>

<section id="results">
<div class="sectionhead"><h2>THE RESULTS</h2><span>Week 6 finals from Yahoo</span></div>
<div class="scorewrap"><table class="scoretable">
<thead><tr><th>Winner</th><th>Points</th><th>Opponent</th><th>Points</th><th>Margin</th></tr></thead>
<tbody>
<tr><td><strong>Loose Endz</strong></td><td><strong>193.45</strong></td><td>Love the Puca hate the game</td><td>156.43</td><td>+37.02</td></tr>
<tr><td><strong>Ball Hogs</strong></td><td><strong>203.09</strong></td><td>Bobby's Juicemen</td><td>137.73</td><td>+65.36</td></tr>
<tr><td><strong>Hail Mary George</strong></td><td><strong>203.55</strong></td><td>Balls? I'm In!</td><td>88.18</td><td>+115.37</td></tr>
<tr><td><strong>Hailee Steinfeld's Husband</strong></td><td><strong>242.45</strong></td><td>Mariah Carey</td><td>106.69</td><td>+135.76</td></tr>
<tr><td><strong>Dolly's Dolls</strong></td><td><strong>154.21</strong></td><td>Wonder Waah</td><td>150.39</td><td>+3.82</td></tr>
<tr><td><strong>Zaddy Dan</strong></td><td><strong>249.32</strong></td><td>Pass Rush David</td><td>202.41</td><td>+46.91</td></tr>
</tbody></table></div>
</section>

<section id="gotham">
<div class="sectionhead"><h2>AROUND GOTHAM</h2><span>All 12 teams, plus several open roster slots</span></div>
<div class="matchups">

<article class="matchup">
<h3>Pat wins while Trevor Lawrence files a formal complaint from the bench</h3>
<div class="matchscore">Loose Endz 193.45 • Love the Puca hate the game 156.43</div>
<p>Pat got 52.33 from Chris Boswell, 30.45 from Germie Bernard, and 29.40 from Jaxon Smith-Njigba. Patrick Mahomes scored 12.76 while Trevor Lawrence scored 49.96 on the bench.</p>
<p>It did not matter. Alex got 41.58 from Christian McCaffrey and 29.14 from Jordan Love, but Davante Adams left with 9.15 and the Texans defense went negative. Loose Endz moved to 4-2. Alex has lost three straight.</p>
</article>

<article class="matchup">
<h3>Mike uses the full lineup and is rewarded for this radical strategy</h3>
<div class="matchscore">Ball Hogs 203.09 • Bobby's Juicemen 137.73</div>
<p>Mike got 36.00 from the Chiefs defense, 31.33 from Matt Gay, 31.15 from Isaiah Likely, and useful points across the board. The Bengals-to-Chiefs defense swap paid off immediately.</p>
<p>Bobby added Kirk Cousins and got 27.02 from him, so the emergency quarterback work was fine. The rest of the lineup was not. Ball Hogs stopped a three-game slide and joined the five other Great Molasses teams at 3-3.</p>
</article>

<article class="matchup">
<h3>George plans for the bye week. Catyn plans around it.</h3>
<div class="matchscore">Hail Mary George 203.55 • Balls? I'm In! 88.18</div>
<p>George added C.J. Stroud and started him for 40.15. Bhayshul Tuten added 41.75, Rachaad White 23.35, and Seattle's defense 21.00. This is what a successful bye-week replacement looks like.</p>
<p>Catyn did make one good move, adding Kendre Miller and receiving 20.33. But Jalen Hurts, Quinshon Judkins, Tyler Warren, and Jake Bates stayed in no-game lineup spots. One replacement cannot cover four vacancies. George won by 115.37.</p>
</article>

<article class="matchup">
<h3>Dave B turns the household into a crime scene</h3>
<div class="matchscore">Hailee Steinfeld's Husband 242.45 • Mariah Carey 106.69</div>
<p>Dave B got 55.33 from Tyler Bass, 44.72 from James Cook, 29.65 from Matthew Golden, and 27.00 from Baltimore's defense. The reigning champion is back to 3-3 after opening 0-2.</p>
<p>Henny started Jacoby Brissett for 6.24 while Tyler Shough scored 49.03 on the bench. Even that swap would not have fixed a 135.76-point loss. Sometimes the bench is a regret. Sometimes the whole house is on fire.</p>
</article>

<article class="matchup">
<h3>Farrar wins the household by 3.82 and keeps the thermostat</h3>
<div class="matchscore">Dolly's Dolls 154.21 • Wonder Waah 150.39</div>
<p>Farrar and Ben, who are dating and live together, produced the week's closest matchup. Jayden Daniels scored 32.58 and Kyle Pitts 33.50 for Farrar. Jason Myers gave Ben 23.67, but the rest never created separation.</p>
<p>Farrar started Cam Skattebo in a no-game spot while Dylan Sampson scored 25.42 on the bench. He still won. The relationship survives. The lineup review will probably happen in the kitchen.</p>
</article>

<article class="matchup">
<h3>Dan reaches 5-1 and makes 249.32 look routine</h3>
<div class="matchscore">Zaddy Dan 249.32 • Pass Rush David 202.41</div>
<p>Drake Maye scored 41.10, Kenneth Walker 48.67, Chuba Hubbard 40.60, and Tre Tucker 37.20. Dan's lineup was healthy, active, and deeply rude.</p>
<p>Dave C scored 202.41 and still lost by 46.91. D'Andre Swift had 40.97, Malik Nabers 31.25, and Cleveland's defense 24.50. Pass Rush David is 2-4 with 1,183.72 points scored, more than several teams with winning records.</p>
</article>

</div>
</section>

<section id="triage">
<div class="sectionhead"><h2>THE LINEUP TRIAGE MANUAL</h2><span>A practical guide for injuries, byes, and avoidable zeroes</span></div>
<p>The short version: protect the players who matter, replace the players who are temporarily unavailable, and drop the player you would be least upset to lose.</p>
<div class="checklist">
<article class="checkitem"><h3>1. Check Thursday morning</h3><p>Look for Thursday games, new injury tags, and bye weeks. Anyone playing Thursday locks at kickoff. Put later-game RB, WR, or TE options in the FLEX when possible so you keep more ways to react.</p></article>
<article class="checkitem"><h3>2. Check again Sunday morning</h3><p>Teams release inactive lists roughly 90 minutes before kickoff. A player who was questionable Friday can become out Sunday. A backup can suddenly become useful. This is the check that prevents a zero.</p></article>
<article class="checkitem"><h3>3. Use IR before dropping a star</h3><p>If Yahoo marks a player IR-eligible and you have an open IR slot, move him there. Do not drop Jalen Hurts, Davante Adams, or another premium player just because the injury lasts several weeks. Preserve the asset and open a roster spot.</p></article>
<article class="checkitem"><h3>4. A bye belongs on the bench, not IR</h3><p>Bye-week players are healthy and cannot use an IR slot. Keep the good ones. Replace them for one week. The person you drop should usually be your lowest-upside bench player, not the star whose schedule is temporarily empty.</p></article>
<article class="checkitem"><h3>5. Drop the player you will not chase back</h3><p>When you need a one-week quarterback, kicker, or defense, ask which current bench player you would be fine losing. If the answer is nobody, consider whether the replacement is truly necessary or whether another roster spot can move to IR.</p></article>
<article class="checkitem"><h3>6. You can swap until that player's kickoff</h3><p>Yahoo generally leaves a player movable until his own game begins. A Sunday night or Monday player gives you more time. Once the game starts, that slot is locked. Do not wait until 1:04 p.m. to learn this.</p></article>
</div>
</section>

<section id="injuries">
<div class="sectionhead"><h2>THE INJURY AND IR DESK</h2><span>What changed after Week 6</span></div>
<div class="matchups">
<article class="matchup"><h3>Jalen Hurts is on injured reserve</h3><p>Philadelphia placed Hurts on IR before Week 6. The team later said he is being treated for a deep vein thrombosis and pulmonary emboli, is clinically stable, and cannot participate in contact activities while on blood thinners. For Catyn, this is an IR-slot situation, not a drop-your-franchise-quarterback situation. Tanner McKee is visible in the supplied available-player list.</p></article>
<article class="matchup"><h3>Davante Adams is expected out 6 to 10 weeks</h3><p>The Rams said Adams ruptured a hamstring muscle and will miss an extended stretch. Alex should move him to IR if Yahoo allows it, then fill the open spot. This is exactly when you drop the lowest-value bench player, not the injured star.</p></article>
<article class="matchup"><h3>Jacory Croskey-Merritt has also gone to IR</h3><p>Washington placed the running back on injured reserve Monday after a groin injury. That affects Pat's depth. Again, the first question is whether he fits in IR. The second is which bench player is least painful to cut for a replacement.</p></article>
<article class="matchup"><h3>A.J. Brown came back, but returns need patience</h3><p>New England activated Brown from IR before Week 6. Mike started him and got 5.45. A player returning from injury may be active without immediately returning to full production. Start decisions should consider workload and practice participation, not just the removal of the IR tag.</p></article>
</div>
<p class="source">Official updates: <a href="https://www.philadelphiaeagles.com/news/eagles-place-jalen-hurts-on-injured-reserve-sign-jaydon-blue-to-the-active-roster-2026-nfl-week-6-panthers" target="_blank" rel="noopener">Eagles roster move</a> · <a href="https://www.philadelphiaeagles.com/news/eagles-and-jalen-hurts-agent-nicole-lynn-provide-an-update-on-qb-jalen-hurts" target="_blank" rel="noopener">Eagles Hurts update</a> · <a href="https://www.therams.com/news/rams-injury-updates-cardinals-week-6-2026-blake-grupe-torn-acl-out-for-season-poona-ford-davante-adams-kobie-turner-trent-mcduffie-raiders" target="_blank" rel="noopener">Rams injury update</a> · <a href="https://www.commanders.com/news/commanders-activate-amos-magee-mcnichols-croskey-merritt-jean-baptiste" target="_blank" rel="noopener">Commanders roster move</a> · <a href="https://www.patriots.com/news/patriots-make-a-series-of-roster-moves-x0182" target="_blank" rel="noopener">Patriots activate A.J. Brown</a>.</p>
</section>

<section id="kicker">
<div class="sectionhead"><h2>THE RAMS KICKER DILEMMA</h2><span>Can nothing go right?</span></div>
<div class="two">
<article>
<h3>From the Thiccer Kicker to the injured little guy in six days</h3>
<p>After Harrison Mevis missed one field goal and had another blocked in the Rams' Week 5 overtime loss, Los Angeles released him and signed Blake Grupe from the Jets' practice squad.</p>
<p>Mevis was the giant. Grupe is listed at 5-foot-7 and 156 pounds. Grupe made a 44-yard field goal in his Rams debut, then injured his knee trying to tackle returner Devin Duvernay on the following kickoff.</p>
<p>The diagnosis was a torn ACL. Grupe is out for the season and on IR. Punter Ethan Evans ended up handling placekicks. The Rams are now looking for another kicker.</p>
<p>This is useful fantasy advice in its purest form: sometimes you correctly replace the struggling player, the replacement performs, and then the replacement tears his ACL doing a job kickers are generally not hired to do. Process matters. Fate remains unsupervised.</p>
<p class="source">Sources: <a href="https://www.nfl.com/news/rams-releasing-kicker-harrison-mevis-signing-k-blake-grupe-off-jets-practice-squad" target="_blank" rel="noopener">NFL.com on the kicker change</a> · <a href="https://www.therams.com/news/rams-injury-updates-cardinals-week-6-2026-blake-grupe-torn-acl-out-for-season-poona-ford-davante-adams-kobie-turner-trent-mcduffie-raiders" target="_blank" rel="noopener">Rams on Grupe's ACL injury</a>.</p>
</article>
<figure class="cartoon"><img src="/week-6-rams-kicker-cartoon.svg" alt="Editorial cartoon showing Harrison Mevis out, Blake Grupe on crutches, and a punter asking whether he should kick next."><figcaption class="caption">The Rams wanted a new kicker. The universe heard a request for a recurring segment.</figcaption></figure>
</div>
</section>

<section id="moves">
<div class="sectionhead"><h2>THE ROSTER-MOVE REPORT</h2><span>Who handled the week well?</span></div>
<div class="matchups">
<article class="matchup"><h3>George: C.J. Stroud goes directly from waivers to 40.15</h3><p>This is the model. George identified the quarterback need, added Stroud early, and started him. The move solved the problem instead of merely adding another name to the bench.</p></article>
<article class="matchup"><h3>Bobby: Kirk Cousins did his job</h3><p>Bobby added Cousins on Sunday and got 27.02. The Juicemen still lost because the rest of the roster underperformed, but the emergency replacement was not the issue.</p></article>
<article class="matchup"><h3>Catyn: Kendre Miller worked, the remaining holes did not</h3><p>Miller scored 20.33 after the add. That is a good move. It also shows why one transaction cannot solve a lineup with several no-game starters.</p></article>
<article class="matchup"><h3>Mike and Dave B: stream defenses with a purpose</h3><p>Mike's Chiefs defense scored 36.00. Dave B's Ravens defense scored 27.00. Streaming defense is not about collecting logos. It is about filling the slot with an active matchup you chose on purpose.</p></article>
</div>
<p class="source">Transaction observations reflect the Yahoo activity supplied through October 18.</p>
</section>

<section id="chaos">
<div class="sectionhead"><h2>THE CHAOS DESK</h2><span>Still severe, slightly less apocalyptic</span></div>
<div class="two">
<article>
<h3>Week 6 Chaos Index: 7.4</h3>
<p>The formula remains 40% outcome impact, 20% positional volatility, 20% scoring concentration, and 20% league-wide unpredictability.</p>
<p><strong>Outcome impact: 6.0.</strong> Removing kicker and defense points flips Pat's win over Alex, but no losing manager had a single obvious bench swap that reversed the final result. The biggest management impact came from no-game lineup spots.</p>
<p><strong>Positional volatility: 8.5.</strong> Starting kickers ranged from 1.00 to 55.33, and starting defenses ranged from minus-1.50 to 36.00.</p>
<p><strong>Scoring concentration: 8.0.</strong> Tyler Bass scored 55.33, Chris Boswell 52.33, Kenneth Walker 48.67, and Chuba Hubbard 40.60. Several lineups leaned heavily on one or two spots.</p>
<p><strong>League-wide unpredictability: 8.5.</strong> One division now has all six teams at 3-3, the week's closest game was 3.82, and the largest margin was 115.37.</p>
</article>
<aside class="index">
<div class="eyebrow">Chaos Index · 0-10 scale</div>
<h3>7.4 · SEVERE</h3>
<p>Lower than Weeks 4 and 5, but still comfortably in the part of the scale where leaving a bye-week player active becomes a headline.</p>
<div class="scale">
<div class="level"><span>0.0-2.0</span><b>Calm</b></div><div class="level"><span>2.1-4.0</span><b>Stirring</b></div><div class="level"><span>4.1-6.0</span><b>Active</b></div><div class="level"><span>6.1-8.0</span><b>Severe</b></div><div class="level"><span>8.1-10</span><b>Full Chaos</b></div>
</div>
<p style="font-size:11px;color:#c9c1b2;margin-top:14px">Gotham Gazette editorial metric using verified league results. Not an official Yahoo statistic.</p>
</aside>
</div>
</section>

<section id="board">
<div class="sectionhead"><h2>THE BOARD</h2><span>Power rankings after Week 6</span></div>
<p>Record matters. Total points matter. An active lineup also seems worth considering.</p>
<div class="board">
<article class="rankcard"><div class="ranknum">01</div><div><h3>Zaddy Dan</h3><div class="rankmeta">5-1 · 1,290.80 PF · unchanged</div><p>Only five-win team. Week-high 249.32. Healthy lineup. No notes.</p></div></article>
<article class="rankcard"><div class="ranknum">02</div><div><h3>Loose Endz</h3><div class="rankmeta">4-2 · 1,334.53 PF · up 2</div><p>Pat still leads the league in points and returned to the win column, even with the wrong quarterback on the field.</p></div></article>
<article class="rankcard"><div class="ranknum">03</div><div><h3>Hail Mary George</h3><div class="rankmeta">4-2 · 1,190.69 PF · up 3</div><p>George fixed the quarterback problem before it existed and won by 115.37. Progress is real.</p></div></article>
<article class="rankcard"><div class="ranknum">04</div><div><h3>Bobby's Juicemen</h3><div class="rankmeta">3-3 · 1,194.11 PF · down 1</div><p>Still one of the league's highest-scoring teams. Week 6 was simply bad almost everywhere.</p></div></article>
<article class="rankcard"><div class="ranknum">05</div><div><h3>Dolly's Dolls</h3><div class="rankmeta">3-3 · 1,175.46 PF · up 2</div><p>Farrar has won two straight, survived Ben by 3.82, and remains fourth in total points despite the long detour through 1-3.</p></div></article>
<article class="rankcard"><div class="ranknum">06</div><div><h3>Wonder Waah</h3><div class="rankmeta">3-3 · 1,166.49 PF · down 4</div><p>Ben loses the household matchup by less than four after scoring 150.39. The roster remains solid. The division remains absurd.</p></div></article>
<article class="rankcard"><div class="ranknum">07</div><div><h3>Pass Rush David</h3><div class="rankmeta">2-4 · 1,183.72 PF · up 2</div><p>Dave C has more points than most of the 3-3 teams and keeps getting paired with somebody having a better day.</p></div></article>
<article class="rankcard"><div class="ranknum">08</div><div><h3>Love the Puca hate the game</h3><div class="rankmeta">2-4 · 1,155.70 PF · unchanged</div><p>Alex has lost three straight and now has a long-term Davante Adams problem. The roster still has enough production to recover.</p></div></article>
<article class="rankcard"><div class="ranknum">09</div><div><h3>Hailee Steinfeld's Husband</h3><div class="rankmeta">3-3 · 1,098.47 PF · up 1</div><p>Dave B has won three of four and just posted 242.45. The defending champion is no longer quietly recovering.</p></div></article>
<article class="rankcard"><div class="ranknum">10</div><div><h3>Mariah Carey</h3><div class="rankmeta">3-3 · 1,060.71 PF · down 5</div><p>Henny follows 275.55 with 106.69. This team contains multitudes and apparently none of them communicate.</p></div></article>
<article class="rankcard"><div class="ranknum">11</div><div><h3>Ball Hogs</h3><div class="rankmeta">3-3 · 1,026.92 PF · unchanged</div><p>Mike finally stops the losing streak and joins the six-way divisional tie. A perfectly ordinary 3-3, if such a thing exists here.</p></div></article>
<article class="rankcard"><div class="ranknum">12</div><div><h3>Balls? I'm In!</h3><div class="rankmeta">1-5 · 970.31 PF · unchanged</div><p>Catyn had a good Kendre Miller add and too many unresolved lineup spots. The first step is moving Hurts to IR and building from there.</p></div></article>
</div>
</section>

<section id="waivers">
<div class="sectionhead"><h2>THE WAIVER WIRE</h2><span>Available-player snapshot supplied October 20</span></div>
<p>The list is quarterback-heavy, which is useful during bye weeks and extremely convenient for anyone whose starter just went to IR.</p>
<div class="waivers">
<article class="waiver"><div class="eyebrow">QB · Waivers Oct. 21 · 27.69</div><h3>Aaron Rodgers</h3><p>The highest Week 6 point total on the supplied list. A reasonable one-week replacement if the matchup works.</p></article>
<article class="waiver"><div class="eyebrow">QB · Waivers Oct. 21 · 24.31</div><h3>Deshaun Watson</h3><p>Another active quarterback option. In a bye-week emergency, playing is already a valuable skill.</p></article>
<article class="waiver"><div class="eyebrow">QB · Waivers Oct. 21 · 24.13</div><h3>Geno Smith</h3><p>Useful depth for a short-term hole. Check matchup, health, and whether you actually need to carry him after the bye passes.</p></article>
<article class="waiver"><div class="eyebrow">QB · Waivers Oct. 21 · 22.32</div><h3>Tanner McKee</h3><p>The direct Eagles replacement while Hurts is out. That makes him especially relevant to Catyn, though the rest of the league can also read Yahoo.</p></article>
<article class="waiver"><div class="eyebrow">WR · Waivers Oct. 21 · 12.44</div><h3>Jordan Addison</h3><p>The most interesting non-quarterback near the top of the list. Check target volume before assuming the name does the work.</p></article>
<article class="waiver"><div class="eyebrow">TE · Waivers Oct. 21 · 10.67</div><h3>Tyler Higbee</h3><p>A usable tight end score in a position where usable is often enough. Particularly relevant for one-week coverage.</p></article>
</div>
</section>

<section id="next">
<div class="sectionhead"><h2>NEXT WEEK IN GOTHAM</h2><span>Week 7 matchups · Yahoo projections as of October 20</span></div>
<div class="next">
<article><h3>Hail Mary George vs. Zaddy Dan</h3><p><strong>Game of the Week.</strong> George is 4-2. Dan is 5-1. The current first-place team meets the manager who just demonstrated successful bye-week planning. Yahoo: George 122.14, Dan 193.88.</p></article>
<article><h3>Loose Endz vs. Pass Rush David</h3><p>Pat leads the league in points. Dave C has one of the league's most misleading 2-4 records. Yahoo: Pat 184.40, Dave C 149.91.</p></article>
<article><h3>Ball Hogs vs. Wonder Waah</h3><p>Two 3-3 Great Molasses teams. Every divisional matchup now functions as a tiebreaker with snacks. Yahoo: Mike 171.07, Ben 163.84.</p></article>
<article><h3>Balls? I'm In! vs. Love the Puca hate the game</h3><p>Catyn needs a rebuilt lineup around Hurts' IR absence. Alex needs to replace Davante Adams. Yahoo: Catyn 101.65, Alex 152.55.</p></article>
<article><h3>Bobby's Juicemen vs. Mariah Carey</h3><p>Bobby and Henny are both 3-3 and both coming off ugly Week 6 results. Yahoo: Bobby 184.24, Henny 154.61.</p></article>
<article><h3>Hailee Steinfeld's Husband vs. Dolly's Dolls</h3><p>Dave B has won three of four. Farrar has won two straight. Another Great Molasses tie must be broken, at least temporarily. Yahoo: Dave B 93.58, Farrar 166.28.</p></article>
</div>
<p class="source">Week 7 projections are an October 20 Yahoo snapshot and will move as bye-week replacements and injury statuses change.</p>
</section>

<section style="border:0">
<div class="corrections">
<h2>CORRECTIONS &amp; OTHER ROSTER MAINTENANCE</h2>
<p>Last week we noted that George had developed a management philosophy around leaving unavailable players active. This week he added C.J. Stroud and scored 203.55. The Gazette acknowledges growth when it sees it.</p>
<p>The entire Great Molasses Flood division is 3-3. This is not a correction. It simply looks like one.</p>
<p>Week 6's Chaos Index falls to 7.4 after two weeks above 8.9. Severe is now considered a quiet week.</p>
</div>
</section>
</main>

<footer>
<div><div class="brand">Gotham Gazette</div><div>Volume III · Issue 6 · Week 6</div></div>
<div>Fantasy data supplied by the editor from Yahoo Fantasy.<br>Managers identified by first name or league nickname only.<br><a href="/archive" style="color:#f4efe4">Browse the archive</a></div>
</footer>
</div>
`;
