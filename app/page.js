import { week10Css, week10Html } from './content/week10';
export const metadata = {
  "title": "Week 10 | Gotham Gazette: Love Wins. The Rest of Us Have Complaints.",
  "description": "George and Dave C are engaged. Pat and Farrar face the sports desk. Dan and Farrar join the 2,000-Point Club.",
  "alternates": {
    "canonical": "https://www.gothamgazette.fans/"
  },
  "openGraph": {
    "title": "Love Wins. The Rest of Us Have Complaints.",
    "url": "https://www.gothamgazette.fans/",
    "type": "article",
    "images": [
      {
        "url": "https://www.gothamgazette.fans/week-10-love-wins.webp",
        "width": 1536,
        "height": 1024,
        "alt": "Two engagement bands on a football playbook celebrating George and Dave"
      }
    ]
  }
};
export default function Page(){return <><style dangerouslySetInnerHTML={{__html:week10Css}}/><a href="/playoffs" style={{display:"block",background:"#8a1f2d",color:"#fffaf1",fontFamily:"Arial,sans-serif",fontSize:"13px",fontWeight:"bold",padding:"14px 16px",textAlign:"center",letterSpacing:".05em"}}>NEW: THE CHAOS BOWL PLAYOFF LAB · PICK THE WINNERS, WRITE THE BRACKET →</a><div dangerouslySetInnerHTML={{__html:week10Html}}/></>;}
