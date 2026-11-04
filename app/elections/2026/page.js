import ElectionView from './ElectionView';
import {editions, latestEdition} from './data';
export const metadata={title:'The 2026 Midterm Desk | Gotham Gazette',description:'2026 midterm election results, sourced reporting and original satire.',alternates:{canonical:'https://www.gothamgazette.fans/elections/2026'},openGraph:{title:'Gotham Midterm Desk | 2026',description:'Election night reporting from Gotham Gazette',url:'https://www.gothamgazette.fans/elections/2026'}};
export default function Page(){return <ElectionView edition={latestEdition} editions={editions}/>}
