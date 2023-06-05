import React, { useContext } from "react";
import Layout from "../../layout";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard | Patient Management</title>
      </Helmet>
      <Layout>
        <h2>Dashboard</h2>
      </Layout>
    </>
  );
};

export default Dashboard;
