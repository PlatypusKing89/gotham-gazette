const refreshedBoard = `<div class="board">
<article class="rankcard"><div class="ranknum">01</div><div><h3>Zaddy Dan</h3><div class="rankmeta">5-1 · 1,290.80 PF · unchanged</div><p>Only five-win team and the Week 6 scoring leader at 249.32. Dan keeps the top spot because both the record and the lineup agree.</p></div></article>
<article class="rankcard"><div class="ranknum">02</div><div><h3>Loose Endz</h3><div class="rankmeta">4-2 · 1,334.53 PF · up 2</div><p>Pat still leads Gotham in total points and won again, even after Trevor Lawrence outscored Mahomes by 37.20 on the bench.</p></div></article>
<article class="rankcard"><div class="ranknum">03</div><div><h3>Hail Mary George</h3><div class="rankmeta">4-2 · 1,190.69 PF · up 3</div><p>George had one of the week's best management wins: add C.J. Stroud, start C.J. Stroud, collect 40.15, move on.</p></div></article>
<article class="rankcard"><div class="ranknum">04</div><div><h3>Hailee Steinfeld's Husband</h3><div class="rankmeta">3-3 · 1,098.47 PF · up 6</div><p>Dave B has won three of four and just scored 242.45. The defending champion has moved from recovery mode to real threat.</p></div></article>
<article class="rankcard"><div class="ranknum">05</div><div><h3>Dolly's Dolls</h3><div class="rankmeta">3-3 · 1,175.46 PF · up 2</div><p>Farrar has won two straight, sits fourth in total points, and keeps surviving the league's least charitable schedule.</p></div></article>
<article class="rankcard"><div class="ranknum">06</div><div><h3>Pass Rush David</h3><div class="rankmeta">2-4 · 1,183.72 PF · up 3</div><p>Dave C scored 202.41 in a loss and has more points than most of the 3-3 teams. Nobody should want this matchup just because the record looks friendly.</p></div></article>
<article class="rankcard"><div class="ranknum">07</div><div><h3>Bobby's Juicemen</h3><div class="rankmeta">3-3 · 1,194.11 PF · down 4</div><p>The season point total remains excellent. Week 6 was not. Bobby stays dangerous, but 137.73 earns a real drop.</p></div></article>
<article class="rankcard"><div class="ranknum">08</div><div><h3>Ball Hogs</h3><div class="rankmeta">3-3 · 1,026.92 PF · up 3</div><p>Mike stopped a three-game slide with 203.09 and a fully active lineup. Basic competence has become a competitive advantage.</p></div></article>
<article class="rankcard"><div class="ranknum">09</div><div><h3>Wonder Waah</h3><div class="rankmeta">3-3 · 1,166.49 PF · down 7</div><p>Ben lost the household matchup by 3.82 and has gone 1-2 over the last three. The roster is still good. The momentum is not.</p></div></article>
<article class="rankcard"><div class="ranknum">10</div><div><h3>Love the Puca hate the game</h3><div class="rankmeta">2-4 · 1,155.70 PF · down 2</div><p>Alex has lost three straight and now has a long-term Davante Adams problem. The point total says recovery is possible. The trend says hurry.</p></div></article>
<article class="rankcard"><div class="ranknum">11</div><div><h3>Mariah Carey</h3><div class="rankmeta">3-3 · 1,060.71 PF · down 6</div><p>Henny followed 275.55 with 106.69. A team this volatile can scare anyone, including its own manager.</p></div></article>
<article class="rankcard"><div class="ranknum">12</div><div><h3>Balls? I'm In!</h3><div class="rankmeta">1-5 · 970.31 PF · unchanged</div><p>Catyn's Kendre Miller move worked. The rest of the lineup did not. The immediate fix is roster maintenance, not a full rebuild.</p></div></article>
</div>`;

export function applyWeek6Refresh(html) {
  return html
    .replace(
      '<div class="statrow"><b>115.37</b><span>George\'s margin over Catyn, the week\'s biggest blowout.</span></div>',
      '<div class="statrow"><b>135.76</b><span>Dave B\'s margin over Henny, the week\'s biggest blowout.</span></div>'
    )
    .replace(
      "the week's closest game was 3.82, and the largest margin was 115.37.",
      "the week's closest game was 3.82, and the largest margin was 135.76."
    )
    .replace(
      '<p>Farrar and Ben, who are dating and live together, produced the week\'s closest matchup. Jayden Daniels scored 32.58 and Kyle Pitts 33.50 for Farrar. Jason Myers gave Ben 23.67, but the rest never created separation.</p>',
      '<p>The household showdown produced the week\'s closest matchup, a 3.82-point decision that was close enough to preserve the peace and annoying enough to be mentioned at dinner. Jayden Daniels scored 32.58 and Kyle Pitts 33.50 for Farrar. Jason Myers gave Ben 23.67, but the rest never created separation.</p>'
    )
    .replace(
      '<p>Record matters. Total points matter. An active lineup also seems worth considering.</p>',
      '<p>Week 6 forces a real reshuffle. Dave B rockets upward after 242.45, Farrar keeps climbing, and Dave C is the 2-4 team nobody should be eager to face. Bobby and Ben slide after rough weeks.</p>'
    )
    .replace(
      /<div class="board">[\s\S]*?<\/div>\n<\/section>\n\n<section id="waivers">/,
      `${refreshedBoard}\n</section>\n\n<section id="waivers">`
    );
}
