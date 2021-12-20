import { PageContent, PageWidth, StyledTitle } from "../Layout/Layout";

const NotFound = () => {
  return (
    <PageWidth>
      <PageContent>
        <StyledTitle>Oops! That doesn't exist.</StyledTitle>
        <div
          style={{
            width: "100%",
            height: "0",
            paddingBottom: "42%",
            position: "relative",
          }}
        >
          <iframe
            title="Matrix Gif"
            src="https://giphy.com/embed/xT8qB3V08emk70OLrG"
            width="100%"
            height="100%"
            style={{ position: "absolute" }}
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          ></iframe>
        </div>
      </PageContent>
    </PageWidth>
  );
};

export default NotFound;
