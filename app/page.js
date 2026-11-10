import { week9Css, week9Html } from './content/week9';
export const metadata = {
  "title": "Week 9 | Gotham Gazette: Farrar wins five straight and takes Dolly’s Dolls to the top of the division",
  "description": "Farrar’s five-win run, the Monday-night household showdown, Pat’s 2,000-Point Club induction and playoff paths for all 12 teams.",
  "alternates": {
    "canonical": "https://www.gothamgazette.fans/"
  },
  "openGraph": {
    "title": "Farrar wins five straight and takes Dolly’s Dolls to the top of the division",
    "description": "Farrar’s five-win run, the Monday-night household showdown, Pat’s 2,000-Point Club induction and playoff paths for all 12 teams.",
    "url": "https://www.gothamgazette.fans/",
    "type": "article",
    "images": [
      {
        "url": "https://www.gothamgazette.fans/week-9-farrar.webp",
        "width": 1536,
        "height": 1024,
        "alt": "Five football dolls celebrate Farrar’s five straight wins"
      }
    ]
  }
};
export default function Page() {
  return <><style dangerouslySetInnerHTML={{ __html: week9Css }} /><div dangerouslySetInnerHTML={{ __html: week9Html }} /></>;
}
