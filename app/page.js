import pageCss from './content/css0';
import sourceHtml from './content/body';
import updateIssue from './content/issue0-updates';

export default function Page() {
  const pageHtml = updateIssue(sourceHtml);
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageCss }} />
      <div dangerouslySetInnerHTML={{ __html: pageHtml }} />
    </>
  );
}
