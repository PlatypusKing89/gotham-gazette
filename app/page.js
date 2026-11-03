import {week8Css,week8Html} from './content/week8';
export const metadata={
 title:"Gotham Gazette | Week 8: Stop George",
 description:"Week 8 villain-origin special: the editor's feud with George, the endorsement of Henny, Dave B's 0.61-point victory, and Pat's victory over Dan.",
 alternates:{canonical:"https://www.gothamgazette.fans/"},
 openGraph:{
  title:"Gotham Gazette Week 8: George, You Have Created a Monster",
  description:"Election Day. The Gazette endorses Henny against George. The managers have finally broken the editor.",
  url:"https://www.gothamgazette.fans/",
  images:[{url:"https://www.gothamgazette.fans/week-8-stop-george.png",width:1600,height:900,alt:"Stop George: Election Day editorial comic"}],
  type:"website"
 }
};
export default function Page(){return <><style dangerouslySetInnerHTML={{__html:week8Css}}/><div dangerouslySetInnerHTML={{__html:week8Html}}/></>;}
