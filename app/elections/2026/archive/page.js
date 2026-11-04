import ElectionView from '../ElectionView';
import {editions} from '../data';
export const metadata={title:"2026 Election Archive | Gotham Gazette",description:"Permanent, time-stamped election-night editions from the Gotham Gazette Midterm Desk.",alternates:{canonical:"https://www.gothamgazette.fans/elections/2026/archive"}};
export default function ElectionArchive(){return <ElectionView archive editions={editions}/>;}
