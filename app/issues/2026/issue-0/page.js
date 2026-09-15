import pageCss from "../../../content/css0";
import sourceHtml from "../../../content/body";
import updateIssue from "../../../content/issue0-updates";
import finalizeIssue from "../../../content/issue0-final-touches";

export const metadata = {
  title: "Issue 0: 2026 Draft Special | Gotham Gazette",
  description: "The first Gotham Gazette issue of the Chaos era: the 2026 draft special.",
  alternates: { canonical: "https://www.gothamgazette.fans/issues/2026/issue-0" },
};

export default function IssueZeroPage() {
  const pageHtml = finalizeIssue(updateIssue(sourceHtml));
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageCss }} />
      <div dangerouslySetInnerHTML={{ __html: pageHtml }} />
    </>
  );
}
