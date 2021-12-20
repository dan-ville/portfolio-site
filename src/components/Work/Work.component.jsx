import { PageWidth, PageContent } from "../Layout/Layout";
import { Outlet } from "react-router-dom";

const Work = () => {

  return (
    <PageWidth>
      <PageContent>
        <Outlet />
      </PageContent>
    </PageWidth>
  );
};
export default Work;
