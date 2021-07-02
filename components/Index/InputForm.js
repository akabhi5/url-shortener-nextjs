import axios from "axios";
import React, { useState } from "react";
import GeneratedUrl from "../GeneratedUrl";
import { toast } from "react-toastify";
import { API_URL } from "../../config";
import Spinner from "../Spinner";

const InputForm = ({ hostUrl }) => {
  const [url, setUrl] = useState("");
  const [generatedUrl, setGeneratedUrl] = useState("");
  const [loading, setLoading] = useState(false);

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
      setGeneratedUrl("");
      setLoading(true);
      const res = await axios.post(`${API_URL}/api/generateurl/`, {
        original_url: url,
      });
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
      setLoading(false);
    } catch (error) {
      setLoading(false);
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
          <form onSubmit={onSubmitForm}>
            <div>
              <label htmlFor="inputUrl" className="visually-hidden">
                Password
              </label>
              <input
                style={{ height: "60px", fontSize: "30px" }}
                type="text"
                className="form-control border-4"
                id="inputUrl"
                placeholder="Enter URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <div>
              <div className="text-center gap-2">
                <button
                  style={{ height: "60px" }}
                  type="submit"
                  className="btn btn-primary my-3"
                >
                  Shorten URL
                </button>
              </div>
            </div>
          </form>
        </div>
        {loading ? <Spinner /> : null}
        {generatedUrl ? <GeneratedUrl generatedUrl={generatedUrl} /> : null}
      </div>
    </div>
  );
};

export default InputForm;
