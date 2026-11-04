import {notFound} from 'next/navigation';
import ElectionView from '../../ElectionView';
import {editions,getEditionBySlug} from '../../data';
export function generateStaticParams(){return editions.map(e=>({slug:e.slug}));}
export async function generateMetadata({params}){const {slug}=await params;const e=getEditionBySlug(slug);if(!e)return {title:'Edition not found | Gotham Gazette'};const url='https://www.gothamgazette.fans/elections/2026/updates/'+slug;return {title:e.kind+' | Gotham Gazette Midterm Desk',description:e.deck,alternates:{canonical:url},openGraph:{title:e.headline,description:e.deck,url,type:'article'}};}
export default async function EditionPage({params}){const {slug}=await params;const e=getEditionBySlug(slug);if(!e)notFound();return <ElectionView edition={e} editions={editions} permanent/>;}
