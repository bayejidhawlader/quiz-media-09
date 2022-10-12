import React from "react";

const Blog = () => {
  return (
    <div className="bg-white">
      <div
        tabIndex={0}
        className="collapse collapse-open border border-base-300 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is the purpose of react router?
        </div>
        <div className="collapse-content">
          <p>
            React Router is a standard library for routing in React. It enables
            the navigation among views of various components in a React
            Application, allows changing the browser URL, and keeps the UI in
            sync with the URL.
          </p>
        </div>
      </div>

      <div
        tabIndex={1}
        className="collapse collapse-open border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is the purpose of react router?
        </div>
        <div className="collapse-content">
          <p>
            React Router is a standard library for routing in React. It enables
            the navigation among views of various components in a React
            Application, allows changing the browser URL, and keeps the UI in
            sync with the URL.
          </p>
        </div>
      </div>

      <div
        tabIndex={2}
        className="collapse collapse-open border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is the purpose of react router?
        </div>
        <div className="collapse-content">
          <p>
            React Router is a standard library for routing in React. It enables
            the navigation among views of various components in a React
            Application, allows changing the browser URL, and keeps the UI in
            sync with the URL.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
