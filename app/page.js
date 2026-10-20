import { week6Css, week6Html } from './content/week6';
import { applyWeek6Refresh } from './content/week6-refresh';

export const metadata = {
  title: "Gotham Gazette | Week 6: Lineup Triage",
  description: "Week 6 of the Gotham Gazette: bye weeks and injuries test Gotham, every Great Molasses team is 3-3, and the Chaos Index lands at 7.4.",
  alternates: { canonical: "https://www.gothamgazette.fans/" },
};

const refreshedWeek6Html = applyWeek6Refresh(week6Html);

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: week6Css }} />
      <div dangerouslySetInnerHTML={{ __html: refreshedWeek6Html }} />
    </>
  );
}
