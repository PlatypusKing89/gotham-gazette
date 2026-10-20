import { week6Css, week6Html } from '../../../content/week6';

export const metadata = {
  title: "Week 6 | Gotham Gazette",
  description: "Week 6 of the Gotham Gazette: bye weeks and injuries test Gotham's lineup management, all six Great Molasses teams land at 3-3, and the Rams kicker crisis gets worse.",
  alternates: { canonical: "https://www.gothamgazette.fans/issues/2026/week-6" },
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

export default function Week6Issue() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: week6Css }} />
      <div dangerouslySetInnerHTML={{ __html: correctedWeek6Html }} />
    </>
  );
}
