import React from "react";
import { Link } from "react-router-dom";

export const Page404 = () => {
  return (
    <div>
      <h1>Page404 Khan</h1>
      <p>This URL is not present</p>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
};

export default Page404;
