import { week3Css, week3Html } from './content/week3';

export const metadata = {
  title: "Gotham Gazette | Week 3: Seven Teams, One Throne",
  description: "Week 3 of the Gotham Gazette: every 2-0 team loses, seven teams are tied at 2-1, the Chaos Index hits 7.7, and Gotham learns to check the bench.",
  alternates: { canonical: "https://www.gothamgazette.fans/" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: week3Css }} />
      <div dangerouslySetInnerHTML={{ __html: week3Html }} />
    </>
  );
}
