import { week1Css, week1Html } from './content/week1';

export const metadata = {
  title: "Gotham Gazette | Week 1: Bobby's Juicemen Nearly Hit 300",
  description: "Week 1 of the Gotham Gazette: Bobby nearly hits 300, the first Chaos Index lands at 6.6, and Gotham gets its first real look at the Chaos era.",
  alternates: { canonical: "https://www.gothamgazette.fans/" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: week1Css }} />
      <div dangerouslySetInnerHTML={{ __html: week1Html }} />
    </>
  );
}
