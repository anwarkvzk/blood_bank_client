import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { UseSelector, useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-flex flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App</h3>
          <hr />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
            totam dicta id in omnis consequuntur aperiam non nam sint ducimus
            excepturi beatae maxime facere numquam molestiae illo iste rerum
            doloribus, dolorum pariatur necessitatibus quisquam? Velit sunt,
            excepturi incidunt eius corporis veritatis dolore officia deleniti
            dolorum vitae esse et, corrupti ratione!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
