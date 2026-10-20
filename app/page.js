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
  );

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: week6Css }} />
      <div dangerouslySetInnerHTML={{ __html: correctedWeek6Html }} />
    </>
  );
}
