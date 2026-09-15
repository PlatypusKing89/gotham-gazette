import { issuesBySeason } from "../data/issues";

export const metadata = {
  title: "Archive | Gotham Gazette",
  description: "Browse every issue of the Gotham Gazette, the newspaper of record for Gotham City Fantasy Sports.",
  alternates: { canonical: "https://www.gothamgazette.fans/archive" },
};

const css = `
:root{--paper:#f5f0e5;--ink:#171717;--muted:#6b675f;--line:#c9c1b2;--accent:#8a1f2d;--panel:#ece4d6;--white:#fffdf8}
*{box-sizing:border-box}
body{margin:0;background:#d8d3ca;color:var(--ink);font-family:Arial,Helvetica,sans-serif;line-height:1.5}
a{color:inherit}
a:focus-visible{outline:3px solid var(--accent);outline-offset:3px}
.skip{position:absolute;left:-9999px;top:0;background:#fff;padding:10px 14px;z-index:10}.skip:focus{left:12px;top:12px}
.page{width:min(1100px,100%);margin:0 auto;background:var(--paper);min-height:100vh;box-shadow:0 0 35px rgba(0,0,0,.14)}
.top{display:flex;justify-content:space-between;gap:16px;padding:10px 28px;background:var(--ink);color:#fff;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
header{padding:26px 34px 0}.mast{font-family:Georgia,'Times New Roman',serif;font-weight:900;text-transform:uppercase;letter-spacing:-.055em;font-size:clamp(54px,8vw,94px);line-height:.88;text-align:center;border-bottom:6px double var(--ink);padding:8px 0 18px}.tag{text-align:center;font-family:Georgia,'Times New Roman',serif;font-style:italic;padding:10px 0;border-bottom:1px solid var(--ink)}
nav{display:flex;justify-content:center;gap:18px;padding:11px 18px;border-bottom:1px solid var(--line);font-size:13px;font-weight:800}nav a{text-decoration:none}nav a:hover{color:var(--accent)}
main{padding:38px 34px 56px}.eyebrow{color:var(--accent);font-size:12px;font-weight:900;letter-spacing:.1em;text-transform:uppercase}.intro{border-bottom:5px solid var(--ink);padding-bottom:26px;margin-bottom:30px}.intro h1{font-family:Georgia,'Times New Roman',serif;font-size:clamp(42px,6vw,72px);line-height:.95;letter-spacing:-.035em;margin:7px 0 12px}.intro p{max-width:780px;font-family:Georgia,'Times New Roman',serif;font-size:20px;color:#3d3933;margin:0}.count{margin-top:18px;font-size:12px;color:var(--muted);font-weight:800;text-transform:uppercase;letter-spacing:.07em}
.season{margin-top:34px}.season-head{display:flex;align-items:end;justify-content:space-between;gap:16px;border-bottom:4px solid var(--ink);margin-bottom:16px}.season-head h2{font-family:Georgia,'Times New Roman',serif;font-size:34px;margin:0 0 7px}.season-head span{font-size:12px;color:var(--muted);margin-bottom:9px}
.grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}.issue{background:var(--white);border:1px solid var(--line);border-top:7px solid var(--accent);padding:20px;display:flex;flex-direction:column;min-height:250px}.meta{font-size:11px;color:var(--accent);font-weight:900;text-transform:uppercase;letter-spacing:.08em}.issue h3{font-family:Georgia,'Times New Roman',serif;font-size:28px;line-height:1.03;margin:8px 0}.issue p{font-size:14px;margin:0 0 18px;color:#403d38}.issue time{font-size:12px;color:var(--muted)}.read{margin-top:auto;display:inline-block;width:max-content;font-weight:900;text-decoration:none;border-bottom:2px solid var(--ink);padding-bottom:2px}.read:hover{color:var(--accent);border-color:var(--accent)}
.empty{background:var(--panel);padding:20px;border-left:6px solid var(--accent);font-family:Georgia,'Times New Roman',serif;font-size:18px}
footer{background:var(--ink);color:#f4efe4;padding:26px 34px;font-size:12px;display:flex;justify-content:space-between;gap:24px}.brand{font-family:Georgia,'Times New Roman',serif;font-size:24px;font-weight:900}
@media(max-width:700px){header,main{padding-left:16px;padding-right:16px}.top{padding:8px 14px;font-size:10px}.mast{font-size:52px}.grid{grid-template-columns:1fr}.season-head{align-items:start;flex-direction:column;gap:0}.season-head span{margin-top:-2px}footer{flex-direction:column;padding:24px 18px}}
`;

export default function ArchivePage() {
  const seasons = Object.keys(issuesBySeason).sort((a, b) => Number(b) - Number(a));
  const total = seasons.reduce((sum, season) => sum + issuesBySeason[season].length, 0);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <a className="skip" href="#archive-main">Skip to archive</a>
      <div className="page">
        <div className="top"><span>Gotham City Fantasy Sports</span><span>Archive</span></div>
        <header>
          <div className="mast">Gotham Gazette</div>
          <div className="tag">The Newspaper of Record for Gotham City Fantasy Sports</div>
        </header>
        <nav aria-label="Primary navigation">
          <a href="/">Latest Issue</a>
          <a href="/archive" aria-current="page">Archive</a>
        </nav>
        <main id="archive-main">
          <section className="intro" aria-labelledby="archive-title">
            <div className="eyebrow">The Morgue</div>
            <h1 id="archive-title">Every issue. Every bad prediction.</h1>
            <p>The permanent record of Gotham City Fantasy Sports, preserved so nobody can quietly pretend they never said that.</p>
            <div className="count">{total} published issue{total === 1 ? "" : "s"}</div>
          </section>

          {seasons.map((season) => (
            <section className="season" key={season} aria-labelledby={`season-${season}`}>
              <div className="season-head">
                <h2 id={`season-${season}`}>{season} Season</h2>
                <span>{issuesBySeason[season].length} issue{issuesBySeason[season].length === 1 ? "" : "s"}</span>
              </div>
              <div className="grid">
                {issuesBySeason[season].map((issue) => (
                  <article className="issue" key={issue.href}>
                    <div className="meta">{issue.volume} · {issue.issueLabel} · {issue.type}</div>
                    <h3>{issue.title}</h3>
                    <time dateTime={issue.date}>{issue.displayDate}</time>
                    <p>{issue.description}</p>
                    <a className="read" href={issue.href} aria-label={`Read ${issue.issueLabel}: ${issue.title}`}>Read issue →</a>
                  </article>
                ))}
              </div>
            </section>
          ))}

          {total === 0 && <div className="empty">The archive is currently empty. This would be more concerning if the league were older.</div>}
        </main>
        <footer>
          <div><div className="brand">Gotham Gazette</div><div>Chaos in outcomes. Clarity in the record.</div></div>
          <div>Independent, noncommercial league publication<br/>Managers identified by first name or league nickname only</div>
        </footer>
      </div>
    </>
  );
}
