import { week3Css, week3Html } from '../../../content/week3';

export const metadata = {
  title: "Week 3 | Gotham Gazette",
  description: "Week 3 of the Gotham Gazette: every undefeated team loses, seven teams sit at 2-1, the Chaos Index lands at 7.7, and the benches are causing problems.",
  alternates: { canonical: "https://www.gothamgazette.fans/issues/2026/week-3" },
};

export default function Week3Issue() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: week3Css }} />
      <div dangerouslySetInnerHTML={{ __html: week3Html }} />
    </>
  );
}
