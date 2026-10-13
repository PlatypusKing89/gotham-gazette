import { week5Css, week5Html } from '../../../content/week5';

export const metadata = {
  title: "Week 5 | Gotham Gazette",
  description: "Week 5 of the Gotham Gazette: Monday night keeps two matchups alive, Ben scores 294.33, the league beats projection by 390.84 points, and the Chaos Index hits 9.1.",
  alternates: { canonical: "https://www.gothamgazette.fans/issues/2026/week-5" },
};

export default function Week5Issue() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: week5Css }} />
      <div dangerouslySetInnerHTML={{ __html: week5Html }} />
    </>
  );
}
