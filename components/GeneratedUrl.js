import React from "react";
import { FaCopy } from "react-icons/fa";

const GeneratedUrl = ({ generatedUrl }) => {
  return (
    <div className="mx-auto mt-5" style={{ width: "70%" }}>
      <div className="card">
        <div className="text-center lead bg-light card-body" id="generated-url">
          {generatedUrl}
        </div>
        <button
          variant="primary"
          className="mr-1 btn btn-primary"
          data-clipboard-target="#foo"
          onClick={() => {
            navigator.clipboard.writeText(generatedUrl);
          }}
        >
          <FaCopy /> Copy to clipboard
        </button>
      </div>
    </div>
  );
};

export default GeneratedUrl;
