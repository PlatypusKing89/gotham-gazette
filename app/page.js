import { week2Css, week2Html } from './content/week2';

export const metadata = {
  title: "Gotham Gazette | Week 2: Chaos Has Learned Precision",
  description: "Week 2 of the Gotham Gazette: three close games, a Chaos Index of 8.2, injury fallout, and a 2-0 team winning with 124 points.",
  alternates: { canonical: "https://www.gothamgazette.fans/" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: week2Css }} />
      <div dangerouslySetInnerHTML={{ __html: week2Html }} />
    </>
  );
}
