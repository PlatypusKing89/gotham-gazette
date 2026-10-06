import { week4Css, week4Html } from './content/week4';

export const metadata = {
  title: "Gotham Gazette | Week 4: The Coven Forms",
  description: "Week 4 of the Gotham Gazette: three teams at 3-1, Catyn breaks the curse with 256.44, the benches are haunted, and October pushes the Chaos Index to 8.9.",
  alternates: { canonical: "https://www.gothamgazette.fans/" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: week4Css }} />
      <div dangerouslySetInnerHTML={{ __html: week4Html }} />
    </>
  );
}
