"use client";

import { useEffect, useMemo, useState } from "react";
import "./playoffs.css";

const TEAMS = [
  {id:"Pat",name:"Loose Endz",div:"Boston Tea Party",w:8,l:2,pf:2246.50,pa:1962.97},
  {id:"Farrar",name:"Dolly's Dolls",div:"Great Molasses Flood",w:7,l:3,pf:2149.08,pa:2042.81},
  {id:"Dan",name:"Zaddy Dan",div:"Boston Tea Party",w:7,l:3,pf:2125.33,pa:1876.00},
  {id:"George",name:"Hail Mary George",div:"Boston Tea Party",w:7,l:3,pf:1972.18,pa:1747.66},
  {id:"Dave B",name:"Hailee Steinfeld's Husband",div:"Great Molasses Flood",w:6,l:4,pf:1842.30,pa:1676.94},
  {id:"Ben",name:"Wonder Waah",div:"Great Molasses Flood",w:5,l:5,pf:1949.36,pa:1780.56},
  {id:"Mike",name:"Ball Hogs",div:"Great Molasses Flood",w:5,l:5,pf:1756.39,pa:1670.06},
  {id:"Henny",name:"Mariah Carey",div:"Great Molasses Flood",w:4,l:6,pf:1755.99,pa:1900.14},
  {id:"Bobby",name:"Bobby's Juicemen",div:"Great Molasses Flood",w:4,l:6,pf:1754.50,pa:1938.46},
  {id:"Dave C",name:"Pass Rush David",div:"Boston Tea Party",w:3,l:7,pf:1785.62,pa:2069.50},
  {id:"Alex",name:"Love the Puca hate the game",div:"Boston Tea Party",w:2,l:8,pf:1841.22,pa:2043.45},
  {id:"Catyn",name:"Balls? I'm In!",div:"Boston Tea Party",w:2,l:8,pf:1505.89,pa:1975.81}
];
const GAMES = [
  [11,"Pat","George"],[11,"Farrar","Henny"],[11,"Mike","Dave B"],
  [11,"Ben","Bobby"],[11,"Dan","Catyn"],[11,"Alex","Dave C"],
  [12,"Pat","Catyn"],[12,"Farrar","Mike"],[12,"George","Dave C"],
  [12,"Dan","Alex"],[12,"Dave B","Bobby"],[12,"Ben","Henny"],
  [13,"Pat","Alex"],[13,"Farrar","Ben"],[13,"George","Catyn"],
  [13,"Dan","Dave C"],[13,"Dave B","Henny"],[13,"Mike","Bobby"]
].map((g,i)=>({week:g[0],a:g[1],b:g[2],id:"g"+i}));
const TEAM = Object.fromEntries(TEAMS.map(t=>[t.id,t]));
const DIVS = ["Boston Tea Party","Great Molasses Flood"];
const DEFAULT_PACE = Object.fromEntries(TEAMS.map(t=>[t.id,Number((t.pf/10).toFixed(2))]));
const fmt = n=>Number(n).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2});
function compare(a,b){return b.w-a.w || b.tiePoints-a.tiePoints || a.id.localeCompare(b.id);}
function standings(picks, pace, pointsMode, rule){
  const teams = TEAMS.map(t=>({...t,tiePoints:t.pf+(pointsMode==="pace"?(Math.max(0,Number(pace[t.id])||0)*3):0)}));
  for(const g of GAMES){
    const win=picks[g.id];
    if(win!==g.a&&win!==g.b) continue;
    const loser=win===g.a?g.b:g.a;
    teams.find(t=>t.id===win).w++;
    teams.find(t=>t.id===loser).l++;
  }
  teams.sort(compare);
  const champs = DIVS.map(d=>teams.filter(t=>t.div===d).sort(compare)[0]);
  const champIDs = new Set(champs.map(t=>t.id));
  let seeded;
  if(rule==="overall"){seeded=teams.slice(0,6);}
  else{
    const four=teams.filter(t=>!champIDs.has(t.id)).slice(0,4);
    seeded=rule==="tops"?[...champs.sort(compare),...four]:[...champs,...four].sort(compare);
  }
  const picked=new Set(seeded.map(t=>t.id));
  const rest=teams.filter(t=>!picked.has(t.id));
  const ties=DIVS.filter(d=>{
    const members=teams.filter(t=>t.div===d);
    return members[0].w===members[1].w;
  });
  return {teams,seeds:seeded,ranked:[...seeded,...rest],champs:champIDs,ties};
}
function Name({id}){return <><strong>{id||"TBD"}</strong><span>{TEAM[id]?.name||"Awaiting a winner"}</span></>;}
function BracketMatch({title,a,b,choice,onChoose,note,seedOrder}){
  const canPick=Boolean(a&&b);
  return <article className="pl-bracket-match">
    <div className="pl-bm-head"><b>{title}</b><small>{note}</small></div>
    {[a,b].map((id,i)=><button key={i} disabled={!canPick} type="button" className={"pl-bracket-team "+(choice===id&&id?"pl-won":"")} onClick={()=>onChoose(choice===id?null:id)}>
      <span className="pl-seedno">{id?"#"+(seedOrder.indexOf(id)+1):"?"}</span><span className="pl-bm-name"><Name id={id}/></span><span className="pl-check">{choice===id&&id?"✓":""}</span>
    </button>)}
  </article>;
}
export default function PlayoffLab(){
  const [picks,setPicks]=useState({});
  const [manager,setManager]=useState("Pat");
  const [rule,setRule]=useState("tops");
  const [reseed,setReseed]=useState(false);
  const [pointsMode,setPointsMode]=useState("pace");
  const [pace,setPace]=useState(DEFAULT_PACE);
  const [post,setPost]=useState({});
  const [copied,setCopied]=useState("");
  useEffect(()=>{
    try{
      const hash=window.location.hash;
      if(!hash.startsWith("#scenario="))return;
      const data=JSON.parse(decodeURIComponent(hash.slice(10)));
      if(data.p&&typeof data.p==="object") setPicks(Object.fromEntries(Object.entries(data.p).filter(([k,v])=>GAMES.some(g=>g.id===k&&(g.a===v||g.b===v)))));
      if(TEAM[data.m])setManager(data.m);
      if(["tops","qualify","overall"].includes(data.s))setRule(data.s);
      if(["pace","current"].includes(data.pm))setPointsMode(data.pm);
      if(typeof data.rs==="boolean")setReseed(data.rs);
      if(data.pace&&typeof data.pace==="object")setPace({...DEFAULT_PACE,...Object.fromEntries(Object.entries(data.pace).filter(([k,v])=>TEAM[k]&&Number.isFinite(Number(v))&&Number(v)>=0))});
      if(data.post&&typeof data.post==="object")setPost(data.post);
    }catch(e){ /* Malformed shared scenario: safely ignore it. */ }
  },[]);
  const table=useMemo(()=>standings(picks,pace,pointsMode,rule),[picks,pace,pointsMode,rule]);
  const seedIDs=table.seeds.map(t=>t.id);
  const selected=table.teams.find(t=>t.id===manager);
  const selectedSeed=seedIDs.indexOf(manager)+1;
  const chosen=GAMES.filter(g=>picks[g.id]===g.a||picks[g.id]===g.b).length;
  const isFull=chosen===GAMES.length;
  const unpickedTeamGames=GAMES.filter(g=>(g.a===manager||g.b===manager)&&!picks[g.id]);
  const projectedMax=selected.w+unpickedTeamGames.length;
  const baselineOrder=[...TEAMS].sort((a,b)=>b.w-a.w||b.pf-a.pf).map(t=>t.id);
  const upsets=GAMES.filter(g=>picks[g.id]&&baselineOrder.indexOf(picks[g.id])>baselineOrder.indexOf(g.a===picks[g.id]?g.b:g.a)).length;
  const q36=[seedIDs[2],seedIDs[5]],q45=[seedIDs[3],seedIDs[4]];
  const q36Winner=q36.includes(post.q36)?post.q36:null;
  const q45Winner=q45.includes(post.q45)?post.q45:null;
  let semiOne=q45Winner,semiTwo=q36Winner;
  if(reseed){
    semiOne=q36Winner&&q45Winner?(seedIDs.indexOf(q36Winner)>seedIDs.indexOf(q45Winner)?q36Winner:q45Winner):null;
    semiTwo=q36Winner&&q45Winner?(semiOne===q36Winner?q45Winner:q36Winner):null;
  }
  const semi1=[seedIDs[0],semiOne],semi2=[seedIDs[1],semiTwo];
  const semi1Winner=semi1.includes(post.semi1)?post.semi1:null;
  const semi2Winner=semi2.includes(post.semi2)?post.semi2:null;
  const finalMatch=[semi1Winner,semi2Winner];
  const champion=semi1Winner&&semi2Winner&&finalMatch.includes(post.final)?post.final:null;
  function select(g,id){setPicks(x=>({...x,[g.id]:x[g.id]===id?null:id}));setPost({});setCopied("");}
  function runTeam(id,win){
    setPicks(x=>{
      const n={...x};for(const g of GAMES)if(g.a===id||g.b===id)n[g.id]=win?id:(g.a===id?g.b:g.a);
      return n;
    });setPost({});setCopied("");
  }
  function autoFill(kind){
    const n={};
    for(const g of GAMES){
      const a=TEAM[g.a],b=TEAM[g.b];
      n[g.id]=kind==="random"?(Math.random()<0.5?g.a:g.b):((a.w>b.w||(a.w===b.w&&a.pf>b.pf))?g.a:g.b);
    }
    setPicks(n);setPost({});setCopied("");
  }
  function reset(){setPicks({});setPost({});setCopied("");}
  async function share(){
    const data={p:picks,m:manager,s:rule,rs:reseed,pm:pointsMode,pace,post};
    const url=window.location.origin+window.location.pathname+"#scenario="+encodeURIComponent(JSON.stringify(data));
    try{await navigator.clipboard.writeText(url);setCopied("Scenario link copied!");}
    catch(e){window.prompt("Copy your scenario link:",url);setCopied("Share this link with Gotham.");}
  }
  const togglePost=(key,v)=>setPost(x=>({...x,[key]:v}));
  return <div className="pl-site">
    <div className="pl-topline"><a href="/">← Back to the Gotham Gazette</a><span>The Newspaper of Record for Gotham City Fantasy Sports</span><a href="/archive">The Morgue</a></div>
    <header className="pl-hero pl-shell">
      <div className="pl-issue">VOLUME III · POSTSEASON SPECIAL · DATA THROUGH WEEK 10</div>
      <div className="pl-masthead">Gotham Gazette</div>
      <div className="pl-edition">THE CHAOS LEAGUE PLAYOFF LAB</div>
      <h1>The Road to the <em>Chaos Bowl.</em></h1>
      <p className="pl-dek">Six chairs. Twelve applicants. Three Sundays left to rewrite the obituary. Pick the winners, build your bracket, and send your enemies the link.</p>
      <div className="pl-stats">
        <div><strong>12</strong><span>Teams</span></div><div><strong>6</strong><span>Playoff seats</span></div><div><strong>18</strong><span>Games to decide</span></div><div><strong>3</strong><span>Weeks left</span></div>
      </div>
    </header>
    <main className="pl-shell">
      <div className="pl-newsbar"><span className="pl-live-dot">●</span> Week 10 is final. Weeks 11–13 are hypothetical. <a href="/issues/2026/week-10">Read the latest issue</a></div>
      <section className="pl-focus pl-paper">
        <div className="pl-focus-head"><div><div className="pl-eyebrow">THE FRONT-PAGE DESK</div><h2>Whose season are we ruining?</h2></div>
        <div className="pl-picker"><label htmlFor="pl-manager">Choose your manager</label><select id="pl-manager" value={manager} onChange={e=>setManager(e.target.value)}>{TEAMS.map(t=><option key={t.id} value={t.id}>{t.id} · {t.name}</option>)}</select></div></div>
        <div className="pl-focus-grid">
          <div className="pl-focus-status"><div className="pl-eyebrow">{TEAM[manager].name} · {TEAM[manager].div}</div>
            <div className="pl-bigrecord">{selected.w}–{selected.l}</div><p>Scenario record</p>
            <strong className={"pl-pill "+(selectedSeed?"pl-in":"pl-out")}>{selectedSeed?"IN THE FIELD · SEED #"+selectedSeed:"ON THE OUTSIDE"}</strong>
          </div>
          <div className="pl-focus-copy">
            <p>{unpickedTeamGames.length? "There are "+unpickedTeamGames.length+" games still undecided for "+manager+". Best possible finish from here: "+projectedMax+"–"+(13-projectedMax)+".":"All of "+manager+"'s remaining games have a winner in your scenario."}</p>
            <div className="pl-shortcuts"><button type="button" onClick={()=>runTeam(manager,true)}>Make {manager} win out</button><button type="button" className="pl-outline" onClick={()=>runTeam(manager,false)}>Make {manager} lose out</button></div>
            <p className="pl-muted">A predicted playoff spot is not a clinch. Points and division tiebreakers can change the result.</p>
          </div>
        </div>
      </section>

      <section className="pl-sim" id="simulator">
        <div className="pl-sectionhead"><div><div className="pl-eyebrow">01 / THE REGULAR-SEASON REMIX</div><h2>You control the next 18 games.</h2><p>Tap a team to give it the win. Tap again to make the matchup undecided.</p></div>
          <div className="pl-actions"><button onClick={()=>autoFill("chalk")} type="button" className="pl-action">Favor the favorites</button><button onClick={()=>autoFill("random")} type="button" className="pl-action">🎲 Full Chaos</button><button onClick={reset} type="button" className="pl-action pl-reset">Reset</button></div></div>
        <div className="pl-progress" role="progressbar" aria-valuenow={chosen} aria-valuemin={0} aria-valuemax={18} aria-label="Regular season matchups decided"><div style={{width:(chosen/18*100)+"%"}} /></div>
        <div className="pl-progresslabel"><strong>{chosen} of 18 decided</strong><span>{isFull?"The regular season is written. The bracket is yours.":"Choose all 18 for a complete hypothetical playoff field."}</span></div>
        <div className="pl-weeks">
          {[11,12,13].map(week=><div className="pl-week" key={week}><div className="pl-weekhead"><span>WEEK {week}</span><small>{week===11?"The pressure starts":"The plot thickens"}</small></div>
            {GAMES.filter(g=>g.week===week).map(g=><article className="pl-game" key={g.id}>
              <div className="pl-game-label">{picks[g.id]?"YOUR PICK · "+picks[g.id]:"WINNER TBD"}</div>
              {[g.a,g.b].map(id=><button key={id} type="button" className={"pl-game-team "+(picks[g.id]===id?"pl-selected":"")} onClick={()=>select(g,id)} aria-pressed={picks[g.id]===id}><span><b>{id}</b><small>{TEAM[id].name}</small></span><span className="pl-game-circle">{picks[g.id]===id?"✓":"○"}</span></button>)}
            </article>)}
          </div>)}
        </div>
      </section>

      <section className="pl-results" id="standings"><div className="pl-sectionhead"><div><div className="pl-eyebrow">02 / THE LEAGUE OFFICE</div><h2>Live scenario standings</h2><p>{isFull?"Final hypothetical seeds for your 13-game regular season.":"Provisional field based on games decided so far."}</p></div><button className="pl-share" type="button" onClick={share}>↗ Share this scenario</button></div>
        {copied&&<p className="pl-copymsg" role="status">{copied}</p>}
        <div className="pl-resultsgrid"><div className="pl-tablewrap pl-paper">
          <table className="pl-table"><thead><tr><th>Seed</th><th>Manager / team</th><th>W–L</th><th>Est. PF</th></tr></thead><tbody>
            {table.ranked.map((t,i)=><tr key={t.id} className={(i===5?"pl-cutline ":"")+(t.id===manager?"pl-highlight":"")}>
              <td><strong>{i<6?"#"+(i+1):"—"}</strong></td><td><b>{t.id}</b><span>{t.name}</span>{table.champs.has(t.id)&&rule!=="overall"&&<small className="pl-divtag">DIVISION LEADER*</small>}</td>
              <td>{t.w}–{t.l}</td><td>{fmt(t.tiePoints)}</td>
            </tr>)}
          </tbody></table>
          <p className="pl-smallnote">The heavy line marks the six-team cutoff. Estimated PF is a tiebreak projection, not a Yahoo forecast. *Division winners use overall record + estimated PF if tied, since division-only records were not in the published data.</p>
        </div>
          <div className="pl-sidenotes">
            <div className="pl-stake"><div className="pl-eyebrow">THE CURRENT BUBBLE</div><h3>The sixth chair is not assigned forever.</h3><p>Ben started the week in sixth at 5–5, just ahead of Mike on points. Change a game and the chair can move.</p><div className="pl-6th">{table.seeds[5]?.id}<span>holds seed #6 in this scenario</span></div></div>
            <div className="pl-stake pl-dark"><div className="pl-eyebrow">CHAOS COUNTER</div><strong className="pl-counter">{upsets}</strong><p>Upsets picked against the Week 10 standings order. This is entertainment, not a predictive model.</p></div>
            <div className="pl-stake"><div className="pl-eyebrow">THE COMMISSIONER'S FINE PRINT</div><p>We use two divisions, two division-winner spots, four wild cards, and season points as the modeled tiebreak. Yahoo can apply division winning percentage first. Adjust the rules below if your actual league settings differ.</p></div>
          </div>
        </div>
      </section>

      <section className="pl-bracket" id="bracket"><div className="pl-sectionhead"><div><div className="pl-eyebrow">03 / THE POSTSEASON</div><h2>Play out the Chaos Bowl.</h2><p>Seeds #1 and #2 earn opening-week byes. Choose every playoff winner to crown a hypothetical champion.</p></div><span className="pl-rule-badge">WEEKS 14–16</span></div>
        <div className="pl-bracket-grid">
          <div className="pl-round"><div className="pl-roundhead">Week 14 <span>Opening round</span></div>
            <BracketMatch title="#3 vs. #6" a={q36[0]} b={q36[1]} seedOrder={seedIDs} choice={q36Winner} onChoose={v=>togglePost("q36",v)} note="Win or go home"/>
            <BracketMatch title="#4 vs. #5" a={q45[0]} b={q45[1]} seedOrder={seedIDs} choice={q45Winner} onChoose={v=>togglePost("q45",v)} note="Somebody regrets this"/>
          </div>
          <div className="pl-round"><div className="pl-roundhead">Week 15 <span>Semifinals</span></div>
            <BracketMatch title="#1 returns" a={semi1[0]} b={semi1[1]} seedOrder={seedIDs} choice={semi1Winner} onChoose={v=>togglePost("semi1",v)} note="First-round bye"/>
            <BracketMatch title="#2 returns" a={semi2[0]} b={semi2[1]} seedOrder={seedIDs} choice={semi2Winner} onChoose={v=>togglePost("semi2",v)} note="First-round bye"/>
          </div>
          <div className="pl-round"><div className="pl-roundhead">Week 16 <span>The Chaos Bowl</span></div>
            <BracketMatch title="THE CHAMPIONSHIP" a={finalMatch[0]} b={finalMatch[1]} seedOrder={seedIDs} choice={champion} onChoose={v=>togglePost("final",v)} note="One team gets insufferable"/>
            <div className="pl-trophy"><div>🏆</div><span>YOUR HYPOTHETICAL CHAMPION</span><strong>{champion||"The throne is empty"}</strong><small>{champion?TEAM[champion].name:"Pick through the bracket to settle it."}</small></div>
          </div>
        </div>
        <div className="pl-consolation"><strong>Not in the top six?</strong> The remaining six head to the consolation bracket. This lab tracks the championship path for now. And yes, it is entirely appropriate to celebrate seventh.</div>
      </section>

      <section className="pl-rules pl-paper" id="rules"><div className="pl-sectionhead"><div><div className="pl-eyebrow">04 / THE TIEBREAKER DESK</div><h2>Change the rules of the hypothetical.</h2></div><span className="pl-rule-badge">NO ACTUAL YAHOO RESULTS CHANGED</span></div>
        <div className="pl-rulesgrid">
          <div><label htmlFor="pl-seeding">Division seeding</label><select id="pl-seeding" value={rule} onChange={e=>{setRule(e.target.value);setPost({});}}>
            <option value="tops">Division winners get seeds #1 and #2</option><option value="qualify">Division winners qualify; overall seed order</option><option value="overall">Overall standings only</option></select><small>Default follows the league's Week 9 Gazette playoff analysis.</small></div>
          <div><label htmlFor="pl-points">Points tiebreak estimate</label><select id="pl-points" value={pointsMode} onChange={e=>{setPointsMode(e.target.value);setPost({});}}><option value="pace">Add 3 weeks at each team's scoring pace</option><option value="current">Use Week 10 point totals unchanged</option></select><small>Neither is a guarantee of final Yahoo points. Set individual estimates below.</small></div>
          <div className="pl-checkboxgroup"><label><input type="checkbox" checked={reseed} onChange={e=>{setReseed(e.target.checked);setPost({});}} /> Re-seed the semifinals</label><small>When on, #1 faces the lowest surviving seed. Check your Yahoo commissioner settings.</small></div>
        </div>
        {pointsMode==="pace"&&<details className="pl-details"><summary>Fine-tune each team's remaining scoring forecast</summary><p>Enter an estimated number of fantasy points <strong>per week</strong> for Weeks 11, 12 and 13. Default: each team's average through ten games. This affects tied records only, not who wins a matchup.</p><div className="pl-pointseditor">{TEAMS.map(t=><label key={t.id}>{t.id}<input type="number" min="0" step="1" value={pace[t.id]} onChange={e=>setPace(x=>({...x,[t.id]:e.target.value}))} /></label>)}</div><button className="pl-action" type="button" onClick={()=>setPace(DEFAULT_PACE)}>Reset points estimates</button></details>}
        {table.ties.length>0&&rule!=="overall"&&<p className="pl-warning">Division leader tie in {table.ties.join(" and ")}: actual Yahoo ordering may depend on division winning percentage. Treat those seeds as provisional.</p>}
        <p className="pl-smallnote">Model limitations: no tied games, commissioner-edited seeds, live Yahoo data feed, exact future points, or division-specific win/loss records. Your selections affect this page only. <a href="https://help.yahoo.com/kb/sports/playoffs-sln6486.html" target="_blank" rel="noopener noreferrer">Yahoo's playoff settings</a> and <a href="https://help.yahoo.com/kb/pro-football-pickem/head-to-head-regular-season-tiebreakers-yahoo-fantasy-sln35744.html" target="_blank" rel="noopener noreferrer">regular-season tiebreakers</a> control the real bracket.</p>
      </section>
      <section className="pl-extras" id="extras"><div className="pl-sectionhead"><div><div className="pl-eyebrow">05 / THE AFTER-HOURS DESK</div><h2>Other ways to start a group-chat argument.</h2></div></div>
        <div className="pl-extrasgrid"><article className="pl-extra"><div className="pl-eyebrow">THE 2,000-POINT CLUB</div><h3>New members. More paperwork.</h3>
          <p>Pat ({fmt(2246.5)}), Farrar ({fmt(2149.08)}) and Dan ({fmt(2125.33)}) are in. George is only <strong>{fmt(2000-1972.18)}</strong> points away. Ben needs {fmt(2000-1949.36)}.</p><p>Someone prepare the embossed stationery.</p></article>
          <article className="pl-extra"><div className="pl-eyebrow">THE HOUSEHOLD HOTLINE</div><h3>Love is patient. Fantasy isn't.</h3><p><strong>Week 11:</strong> Mike faces Dave B in a crucial bubble game. <strong>Week 12:</strong> newly engaged George and Dave C face one another. <strong>Week 13:</strong> Farrar faces Ben at home.</p></article>
          <article className="pl-extra"><div className="pl-eyebrow">THE SCHEDULE COMPLAINT DEPARTMENT</div><h3>Points against, your honor.</h3><p>Dave C has faced <strong>{fmt(2069.50)}</strong> points, the most in Gotham. Mike has faced just <strong>{fmt(1670.06)}</strong>, the fewest. Different opponents, different headaches.</p></article>
        </div>
      </section>
      <footer className="pl-footer"><span>GOTHAM GAZETTE · THE PLAYOFF LAB · 2026</span><span>Based on the published Week 10 Yahoo snapshot, November 17, 2026. No live Yahoo sync.</span><a href="/">Back to the latest edition ↑</a></footer>
    </main>
  </div>;
}
