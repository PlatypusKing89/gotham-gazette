import Desk from '../../Desk';
import {editions as originalEditions} from '../../data/editions';
export const metadata={title:"Original 8:00 PM Election Bulletin | Gotham Gazette",description:"Permanent original election-night snapshot from the Gotham Midterm Desk.",alternates:{canonical:"https://www.gothamgazette.fans/elections/2026/updates/nov-03-2026-2000-et"}};
export default function OriginalOpeningEdition(){return <Desk e={originalEditions[0]} archived/>;}
