import { week1Css, week1Html } from '../../../content/week1';

export const metadata = {
  title: "Week 1 | Gotham Gazette",
  description: "Bobby's Juicemen nearly hit 300, the Chaos Index debuts at 6.6, and Gotham City Fantasy Sports opens the Chaos era.",
  alternates: { canonical: "https://www.gothamgazette.fans/issues/2026/week-1" },
};

export default function Week1Issue() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: week1Css }} />
      <div dangerouslySetInnerHTML={{ __html: week1Html }} />
    </>
  );
}
