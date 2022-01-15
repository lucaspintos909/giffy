import React from "react";
import ContentLoader from "react-content-loader";

const Loader = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="24" rx="3" ry="3" width="220" height="6" />
    <rect x="0" y="40" rx="3" ry="3" width="200" height="6" />
    <rect x="0" y="57" rx="3" ry="3" width="230" height="6" />
    <rect x="0" y="72" rx="3" ry="3" width="220" height="6" />
    <rect x="0" y="88" rx="3" ry="3" width="240" height="6" />
  </ContentLoader>
);

export default Loader;
