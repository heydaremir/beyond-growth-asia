import ContentMain from "./ContentMain";
import SubContentMain from "./SubContentMain";
import SubContentOpportunity from "./SubContentOpportunity";
import SubContentWeDo from "./SubContentWeDo";

function Main({ title, content, page }) {
  return (
    <>
      <div className="mt-20"></div>
      <ContentMain title={title} content={content} page={page}></ContentMain>
      {page === "opportunity" && (
        <SubContentOpportunity></SubContentOpportunity>
      )}
      {page === "wedo" && (
        <SubContentWeDo></SubContentWeDo>
      )}
    </>
  );
}

export default Main;
