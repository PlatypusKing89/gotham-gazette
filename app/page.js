import { week7Css, week7Html } from './content/week7';

export const metadata = {
  title: "Gotham Gazette | Week 7: The Managers Are the Chaos",
  description: "George and Catyn win with incomplete lineups and break the editor. The Week 7 Chaos Agents edition, with all six recaps, bench receipts, waiver options, and Week 8 previews.",
  alternates: { canonical: "https://www.gothamgazette.fans/" },
  openGraph: {
    title: "Gotham Gazette Week 7: Seven Starters. Eight Starters. Two Wins. I Quit.",
    description: "George is No. 1. Catyn is No. 2. The editor needs a vacation.",
    url: "https://www.gothamgazette.fans/",
    images: [{ url: "https://www.gothamgazette.fans/week-7-editors-note.png", width: 1672, height: 941, alt: "The approved Editor's Note illustration, with George and Catyn crowned Chaos Agents." }],
    type: "website"
  }
};

export default function Page() {
  return <><style dangerouslySetInnerHTML={{ __html: week7Css }} /><div dangerouslySetInnerHTML={{ __html: week7Html }} /></>;
}
