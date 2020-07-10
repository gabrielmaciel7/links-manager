import React from "react";
import { connect } from "react-redux";

import Layout from "../../../Layouts/Manage";

import { linkCreate } from "../../../../actions/LinkActions";
import { Redirect } from "react-router-dom";

const Create = ({ link, linkCreate }) => {
  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    linkCreate(data);
  };

  if (link) {
    return <Redirect to="/manage/links" />;
  }

  return (
    <Layout>
      <h1>Create link</h1>
      <div className="">
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label>Label</label>
            <input type="text" name="label" />
          </div>
          <div className="form-group">
            <label>Url</label>
            <input type="text" name="url" />
          </div>
          <div className="form-group form-check">
            <label className="form-check-label">
              <input type="checkbox" name="is_social" />
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

const mapStateToProps = (state) => {
  return { link: state.link.link };
};

export default connect(mapStateToProps, { linkCreate })(Create);
