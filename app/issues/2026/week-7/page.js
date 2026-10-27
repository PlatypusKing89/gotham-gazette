import { week7Css, week7Html } from '../../../content/week7';

export const metadata = {
  title: "Week 7 | Gotham Gazette: The Managers Are the Chaos",
  description: "George and Catyn win with incomplete lineups, the editor loses patience, and Gotham crowns its ultimate Chaos Agents. Week 7 results, bench receipts, waivers, and Week 8 previews.",
  alternates: { canonical: "https://www.gothamgazette.fans/issues/2026/week-7" },
  openGraph: {
    title: "Gotham Gazette Week 7: The Managers Are the Chaos",
    description: "Seven starters. Eight starters. Two wins. I quit.",
    url: "https://www.gothamgazette.fans/issues/2026/week-7",
    images: [{ url: "https://www.gothamgazette.fans/week-7-editors-note.png", width: 1672, height: 941, alt: "George and Catyn receive Chaos crowns while the editor loses patience." }],
    type: "article"
  }
};

export default function Week7Issue() {
  return <><style dangerouslySetInnerHTML={{ __html: week7Css }} /><div dangerouslySetInnerHTML={{ __html: week7Html }} /></>;
}
