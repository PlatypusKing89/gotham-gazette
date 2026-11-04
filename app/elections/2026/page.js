import ElectionView from './ElectionView';
import {latestEdition,editions} from './data';
export const metadata={title:"Gotham Gazette Midterm Desk | 2026 Election",description:"A separate, source-backed election-night special with race calls, a balance-of-power board and satirical dispatches.",alternates:{canonical:"https://www.gothamgazette.fans/elections/2026"},openGraph:{title:"Gotham Gazette | Midterm Desk",description:"Election-night results and commentary, without touching the fantasy homepage.",url:"https://www.gothamgazette.fans/elections/2026",type:"website"}};
export default function ElectionPage(){return <ElectionView edition={latestEdition} editions={editions}/>;}
