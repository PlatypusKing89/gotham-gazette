import pageCss from './content/css0';
import sourceHtml from './content/body';

function updateIssue(html) {
  let out = html;

  out = out.replace(
    "Kickers went in Round 3. George hoarded stars. Catyn used the No. 10 pick on a running back who is currently on Jacksonville's practice squad. Somehow, all of this happened according to plan.",
    "Kickers went in Round 3. George hoarded stars. Catyn used the No. 10 pick on J'Mari Taylor, then dropped him before Week 1. Chaos did not even wait for kickoff."
  );

  out = out.replace(
    "Then there is Catyn. Balls? I'm In! used the No. 10 pick on J'Mari Taylor. Taylor had a strong preseason, but as of this week he is on Jacksonville's practice squad. This is not a typo. The rest of Catyn's draft is good enough that the paper has decided to treat this as an experimental opening rather than an emergency.",
    "Then there is Catyn. Balls? I'm In! used the No. 10 pick on J'Mari Taylor, then dropped him before the season even started. Was it a wasted first-round pick? In the narrow sense that he never played a snap for the team, yes. The good news is that CeeDee Lamb, Jalen Hurts, Quinshon Judkins and Tee Higgins give Catyn several chances to make this paragraph age badly."
  );

  out = out.replace(
    '<p>And that is where we are. Twelve rosters, four Daves, one new scoring system',
    '<p>There is also a title to defend. Henny won the first Gotham championship over Mike. Dave B took Year 2, beating Alex in the final. Now the league has a first-time manager in Dave C, a reigning champ trying to repeat, two former runners-up looking for another shot, and eight other people who would prefer this paragraph stop naming everybody else.</p><p>And that is where we are. Twelve rosters, four Daves, one new scoring system'
  );

  out = out.replace(
    "J'Mari Taylor. Currently on Jacksonville's practice squad. Catyn remains available for comment.",
    "J'Mari Taylor, drafted No. 10 overall and already dropped. The transaction wire has entered the chat."
  );

  out = out.replace(
    '<div class="sidebar-story"><div class="kicker">Late-round nonsense that might matter</div><h3>Mahomes at 151</h3><p>Pat took Patrick Mahomes in Round 13. The model still projects 34.9 Chaos points per game. Quarterback depth got strange fast.</p></div>',
    '<div class="sidebar-story"><div class="kicker">The title chase</div><h3>Who wins Year 3?</h3><p>Henny has Year 1. Dave B has Year 2. Alex and Mike have both made the final. Dave C is brand new. The Chaos era starts with a clean slate and a very short history already worth arguing about.</p></div>'
  );

  out = out.replace(
    "Catyn · CeeDee, Hurts, Judkins and Tee Higgins are good. The No. 10 overall pick is currently on a practice squad. Both statements can be true.",
    "Catyn · CeeDee, Hurts, Judkins and Tee Higgins are good. The No. 10 overall pick has already been dropped. Both statements can be true."
  );
  out = out.replace(
    "*Projection excludes J'Mari Taylor because he was not in the Gazette's final pre-draft projection model and is currently on Jacksonville's practice squad.",
    "*Projection excludes J'Mari Taylor. Catyn drafted him No. 10 overall and dropped him before Week 1."
  );

  out = out.replace(
    '<h3>Catyn Takes J\'Mari Taylor at 10</h3><p>Taylor is talented. He also entered this week on Jacksonville\'s practice squad. Catyn followed the pick with CeeDee Lamb and Jalen Hurts, which suggests this was not a cry for help. We will continue to monitor the situation.</p>',
    '<h3>Catyn Takes J\'Mari Taylor at 10. Then Drops Him.</h3><p>The first-round pick did not survive to Week 1. That is, technically, a wasted pick. It is also the kind of move that becomes genius if the replacement matters and a recurring Gazette graphic if it does not. We will keep the file open.</p>'
  );

  out = out.replace(
    "The J'Mari Taylor pick is going to get attention. CeeDee, Hurts, Judkins and Tee Higgins give Catyn a very real way to make us shut up.",
    "The J'Mari Taylor pick got attention. Then Catyn dropped him before Week 1. CeeDee, Hurts, Judkins and Tee Higgins now get the job of making everyone forget it."
  );

  out = out.replace(
    '<div class="manager">Dave C</div><h3>Pass Rush David</h3>',
    '<div class="manager">Dave C · Rookie manager</div><h3>Pass Rush David</h3>'
  );

  const history = '<section id="history"><div class="sectionhead"><h2>THREE YEARS, THREE QUESTIONS</h2><div class="note">The shortest dynasty history in sports, taken very seriously</div></div><div class="three"><article class="story"><div class="fact">2024 · Year 1</div><h3>Henny Opens the Record Book</h3><p>Henny beat Mike in the first Gotham championship. Every league needs an original champion. Unfortunately for the rest of us, he knows this.</p></article><article class="story"><div class="fact">2025 · Year 2</div><h3>Dave B Takes the Crown</h3><p>Dave B beat Alex in the final and enters the Chaos era as the reigning champion. Repeating would be hard enough without the league changing the scoring system underneath him.</p></article><article class="story"><div class="fact">2026 · Year 3</div><h3>So Who Gets the Next One?</h3><p>Two champions. Two runners-up. One brand-new Dave C. Twelve teams now start over under Chaos rules. The Gazette has projections. History has been less cooperative.</p></article></div></section>';
  if (!out.includes('id="history"')) out = out.replace('<section id="sketches">', history + '<section id="sketches">');

  return out;
}

export default function Page() {
  const pageHtml = updateIssue(sourceHtml);
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageCss }} />
      <div dangerouslySetInnerHTML={{ __html: pageHtml }} />
    </>
  );
}
