import React from "react";
import { Link } from "react-router-dom";

import Layout from "../../Layouts/Manage";

const Links = () => {
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
        <div>
          <div>
            <img src="https://via.placeholder.com/100" alt="Link icon" />
          </div>
          <div>
            <span>Item Label</span>
            <span>Item Url</span>
          </div>
          <div>
            <span>Edit</span>
            <span>Delete</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Links;
