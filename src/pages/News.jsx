import React from "react";

export default function News() {
  return (
    <>
    <div className="page-container align-center">
      <h1>Local News</h1>
      <p>
        Stay informed about San Francisco and local current events with this
        SFGate RSS feed.
      </p>
    </div>
    {/* start feedwind code */}
    <script
      type="text/javascript"
      src="https://feed.mikle.com/js/fw-loader.js"
      preloader-text="Loading"
      data-fw-param="158627/"
    ></script>
    {/* end feedwind code */}
    </>
);
}