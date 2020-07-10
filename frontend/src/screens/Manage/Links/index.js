import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Layout from "../../Layouts/Manage";
import { linkList } from "../../../actions/LinkActions";

const Links = ({ links, linkList }) => {
  useEffect(() => {
    linkList();
  }, [linkList]);

  return (
    <Layout>
      <div>
        <div>
          <div>
            <h1>Links</h1>
          </div>
          <div>
            <Link to="/manage/links/create">Add</Link>
          </div>
        </div>

        {links && links.length
          ? links.map((link) => {
              return (
                <div>
                  <div>
                    <img
                      src="https://via.placeholder.com/100"
                      alt="Link icon"
                    />
                  </div>
                  <div>
                    <span>{link.label}</span>
                    <span>{link.url}</span>
                  </div>
                  <div>
                    <span>Edit</span>
                    <span>Delete</span>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return { links: state.link.links };
};

export default connect(mapStateToProps, { linkList })(Links);
