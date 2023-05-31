import React, { useContext } from "react";
import { Layout } from "./dashboard/layout";
// import { AuthContext } from '../context/AuthContext';

const Dashboard = () => {
  // const { isAuthenticated, logout } = useContext(AuthContext);

  // const handleLogout = () => {
  //   logout();
  // };

  // if (!isAuthenticated) {
  //   return (
  //     <div>
  //       <h2>Access Denied</h2>
  //       <p>You need to be logged in to access the dashboard.</p>
  //     </div>
  //   );
  // }

  return (
    <Layout>
      <h2>Dashboard</h2>
      {/* <button onClick={handleLogout}>Log Out</button> */}
    </Layout>
  );
};

export default Dashboard;
