import React from "react";

import Layout from "../../../Layouts/Manage";

const Create = () => {
  return (
    <Layout>
      <h1>Create link</h1>
      <div className="">
        <form>
          <div className="form-group">
            <label>Label</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Url</label>
            <input type="text" />
          </div>
          <div className="form-group form-check">
            <label className="form-check-label">
              <input type="checkbox" name="isSocial" />
              <span className="form-check-sign"></span>
              Is Social
            </label>
          </div>
          <div>
            <button className="submit">Submit</button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Create;
