import { week2Css, week2Html } from '../../../content/week2';

export const metadata = {
  title: "Week 2 | Gotham Gazette",
  description: "Week 2 of the Gotham Gazette: three games decided by five points, a Chaos Index of 8.2, and an injury ward filling up across Gotham.",
  alternates: { canonical: "https://www.gothamgazette.fans/issues/2026/week-2" },
};

export default function Week2Issue() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: week2Css }} />
      <div dangerouslySetInnerHTML={{ __html: week2Html }} />
    </>
  );
}
