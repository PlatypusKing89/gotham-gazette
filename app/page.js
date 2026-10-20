import { week6Css, week6Html } from './content/week6';

export const metadata = {
  title: "Gotham Gazette | Week 6: Lineup Triage",
  description: "Week 6 of the Gotham Gazette: bye weeks and injuries test Gotham, every Great Molasses team is 3-3, and the Chaos Index lands at 7.4.",
  alternates: { canonical: "https://www.gothamgazette.fans/" },
};

const correctedWeek6Html = week6Html
  .replace(
    '<div class="statrow"><b>115.37</b><span>George\'s margin over Catyn, the week\'s biggest blowout.</span></div>',
    '<div class="statrow"><b>135.76</b><span>Dave B\'s margin over Henny, the week\'s biggest blowout.</span></div>'
  )
  .replace(
    "the week's closest game was 3.82, and the largest margin was 115.37.",
    "the week's closest game was 3.82, and the largest margin was 135.76."
  )
  .replace(
    'One game separates second place from ninth in the overall standings.',
    'Yahoo ranks second through ninth with two 4-2 teams and six 3-3 teams. The standings are mostly traffic.'
  )
  .replace(
    'They cut the biggest kicker in the league, signed one of the smallest, watched him make one field goal, and then lost him for the season when he tried to tackle a returner.',
    'They released 243-pound Harrison Mevis, signed 5-foot-7 Blake Grupe, watched him make a 44-yard field goal, and then lost him for the season after he injured his knee tackling a returner.'
  );

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: week6Css }} />
      <div dangerouslySetInnerHTML={{ __html: correctedWeek6Html }} />
    </>
  );
}
