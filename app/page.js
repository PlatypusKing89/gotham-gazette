import { week5Css, week5Html } from './content/week5';

export const metadata = {
  title: "Gotham Gazette | Week 5: Overtime Kept Gotham Awake",
  description: "Week 5 of the Gotham Gazette: Monday night keeps Gotham unsettled, Ben drops 294.33, three games finish within 5.39 points, and the Chaos Index reaches 9.1.",
  alternates: { canonical: "https://www.gothamgazette.fans/" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: week5Css }} />
      <div dangerouslySetInnerHTML={{ __html: week5Html }} />
    </>
  );
}
