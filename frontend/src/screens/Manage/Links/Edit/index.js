import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import Layout from "../../../Layouts/Manage";
import FormGroup from "../../../../components/FormGroup";
import FormCheck from "../../../../components/FormCheck";

import {
  linkGet,
  linkUpdate,
  linkClear,
} from "../../../../actions/LinkActions";
import { getFormData } from "../../../../helpers/form";

const Edit = ({ link, linkGet, linkUpdate, linkClear }) => {
  const { id } = useParams();

  useEffect(() => {
    linkGet(id);

    return () => linkClear();
  }, [id, linkGet, linkClear]);

  const submitHandler = (e) => {
    e.preventDefault();

    const data = getFormData(e);

    linkUpdate(id, data);
  };

  return (
    <Layout>
      <h1>Edit link</h1>
      <div className="">
        <form onSubmit={submitHandler}>
          <FormGroup label="label" name="label" data={link} type="text" />
          <FormGroup label="Url" name="url" data={link} type="text" />

          <FormCheck label="is Social" name="is_social" data={link} />
          <div>
            <button className="submit">Submit</button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    link: state.link.link,
  };
};

export default connect(mapStateToProps, { linkGet, linkUpdate, linkClear })(
  Edit
);
