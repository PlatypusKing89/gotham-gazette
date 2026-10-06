import { week4Css, week4Html } from '../../../content/week4';

export const metadata = {
  title: "Week 4 | Gotham Gazette",
  description: "The Gotham Gazette Week 4 October edition: Catyn breaks the curse, three Boston Tea Party teams reach 3-1, haunted benches return, and the Chaos Index hits 8.9.",
  alternates: { canonical: "https://www.gothamgazette.fans/issues/2026/week-4" },
};

export default function Week4Issue() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: week4Css }} />
      <div dangerouslySetInnerHTML={{ __html: week4Html }} />
    </>
  );
}
