import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import Layout from "../../../Layouts/Manage";
import FormGroup from "../../../../components/FormGroup";
import FormCheck from "../../../../components/FormCheck";

import { linkGet } from "../../../../actions/LinkActions";

const Edit = ({ link, linkGet }) => {
  const { id } = useParams();

  useEffect(() => {
    linkGet(id);
  }, [id, linkGet]);

  console.log("*** Edit.link", link);
  console.log("*** Edit.id", id);

  return (
    <Layout>
      <h1>Edit link</h1>
      <div className="">
        <form>
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

export default connect(mapStateToProps, { linkGet })(Edit);
