import pageCss from './content/css0';
import sourceHtml from './content/body';
import updateIssue from './content/issue0-updates';
import finalizeIssue from './content/issue0-final-touches';

export default function Page() {
  const pageHtml = finalizeIssue(updateIssue(sourceHtml));
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageCss }} />
      <div dangerouslySetInnerHTML={{ __html: pageHtml }} />
    </>
  );
}
