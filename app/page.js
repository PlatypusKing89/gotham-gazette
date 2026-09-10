import pageCss from './content/css0';
import pageHtml from './content/body';

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageCss }} />
      <div dangerouslySetInnerHTML={{ __html: pageHtml }} />
    </>
  );
}
