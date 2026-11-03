import { week8Css, week8Html } from '../../../content/week8';

export const metadata = {
  title: "Week 8 | Gotham Gazette: George, You Have Created a Monster",
  description: "The Week 8 villain-origin special: George wins with empty lineup slots, the editor endorses Henny, Dave B wins by 0.61, and Pat survives Dan.",
  alternates: {canonical:"https://www.gothamgazette.fans/issues/2026/week-8"},
  openGraph:{
    title:"Gotham Gazette Week 8: Stop George.",
    description:"The editor endorses Henny. George becomes the villain. Gotham's closest game ends by 0.61.",
    url:"https://www.gothamgazette.fans/issues/2026/week-8",
    images:[{url:"https://www.gothamgazette.fans/week-8-stop-george.png",width:1600,height:900,alt:"Week 8 Election Day Gazette illustration: Stop George. The editor endorses Henny."}],
    type:"article"
  }
};
export default function Week8Issue(){return <><style dangerouslySetInnerHTML={{__html:week8Css}}/><div dangerouslySetInnerHTML={{__html:week8Html}}/></>;}
