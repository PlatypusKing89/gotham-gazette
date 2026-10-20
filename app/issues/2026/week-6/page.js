import { week6Css, week6Html } from '../../../content/week6';

export const metadata = {
  title: "Week 6 | Gotham Gazette",
  description: "Week 6 of the Gotham Gazette: bye weeks and injuries test Gotham's lineup management, all six Great Molasses teams land at 3-3, and the Rams kicker crisis gets worse.",
  alternates: { canonical: "https://www.gothamgazette.fans/issues/2026/week-6" },
};

export default function Week6Issue() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: week6Css }} />
      <div dangerouslySetInnerHTML={{ __html: week6Html }} />
    </>
  );
}
