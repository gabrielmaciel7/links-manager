import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Layout from "../../Layouts/Manage";
import { linkList, setLinkToRemove, linkRemove } from "../../../actions/LinkActions";

const Links = ({
  links,
  linkRemove,
  linkToRemove,
  linkList,
  setLinkToRemove,
}) => {
  useEffect(() => {
    linkList();
  }, [linkList]);

  const cancelDelete = (e) => setLinkToRemove(null);

  const confirmDelete = (e) => (linkToRemove ? linkRemove(linkToRemove) : null);

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

        {linkToRemove ? (
          <div className="modal-alert">
            <h4>Delete confirmation</h4>
            <p>
              Are you sure you want to delete?
              <br />
              This action cannot be undone.
            </p>
            <div>
              <button onClick={cancelDelete}>Cancel</button>
              <button onClick={confirmDelete}>Delete</button>
            </div>
          </div>
        ) : null}
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

export default connect(mapStateToProps, { linkList, setLinkToRemove, linkRemove })(Links);
