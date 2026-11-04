import {notFound} from 'next/navigation';import {editions,findEdition} from '../../data/editions';import Desk from '../../Desk';
export function generateStaticParams(){return editions.map(e=>({slug:e.id}));}
export async function generateMetadata({params}){const {slug}=await params;const e=findEdition(slug);return e?{title:e.title+' | Election Archive',description:e.dek,alternates:{canonical:'https://www.gothamgazette.fans/elections/2026/updates/'+slug}}:{}}
export default async function Update({params}){const {slug}=await params;const e=findEdition(slug);if(!e)notFound();return <Desk e={e} archived/>}
