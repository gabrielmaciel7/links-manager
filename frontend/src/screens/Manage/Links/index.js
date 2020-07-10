import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Layout from "../../Layouts/Manage";
import { linkList, setLinkToRemove } from "../../../actions/LinkActions";

const Links = ({ links, linkToRemove, linkList, setLinkToRemove }) => {
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
              const deleteClick = (e) => {
                setLinkToRemove(link);
              };

              const border =
                linkToRemove && linkToRemove._id === link._id
                  ? "link-delete"
                  : "link-normal";

              return (
                <div key={link._id} className={border}>
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
                    <Link to={`/manage/links/edit/${link._id}`}>Edit</Link>
                    <button onClick={deleteClick}>Delete</button>
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
  return {
    links: state.link.links,
    linkToRemove: state.link.linkToRemove,
  };
};

export default connect(mapStateToProps, { linkList, setLinkToRemove })(Links);
