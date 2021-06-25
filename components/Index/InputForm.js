import axios from "axios";
import React, { useState } from "react";
import GeneratedUrl from "../GeneratedUrl";
import { toast } from "react-toastify";
import { API_URL } from "../../config";

const InputForm = ({ hostUrl }) => {
  const [url, setUrl] = useState("");
  const [generatedUrl, setGeneratedUrl] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();

    if (!url) {
      toast.warn("Plase enter a valid URL", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    try {
      const res = await axios.post(`${API_URL}/api/generateurl/`, {
        original_url: url,
      });
      console.log(res.data);
      setGeneratedUrl(`${hostUrl}/${res.data.shorten_url}`);
      toast("Short URL generated", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      toast.error("Some error occurred. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="container">
      <div>
        <div style={{ width: "90%" }} className="mx-auto">
          <form onSubmit={onSubmitForm} className="row">
            <div className="col-10">
              <label htmlFor="inputUrl" className="visually-hidden">
                Password
              </label>
              <input
                style={{ height: "60px", fontSize: "30px" }}
                type="text"
                className="form-control"
                id="inputUrl"
                placeholder="Enter URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <div className="col-2">
              <button
                style={{ height: "60px" }}
                type="submit"
                className="btn btn-primary mb-3"
              >
                Shorten URL
              </button>
            </div>
          </form>
        </div>
        {generatedUrl ? <GeneratedUrl generatedUrl={generatedUrl} /> : null}
      </div>
    </div>
  );
};

export default InputForm;
