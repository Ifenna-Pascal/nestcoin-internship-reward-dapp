import React from "react";

const Error = ({ error }) => {
  if (!error) return "";

  return <div className="text-red-500 text-base mb-3">{error}</div>;
};

export default Error;
