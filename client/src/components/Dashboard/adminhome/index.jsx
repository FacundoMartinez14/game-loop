import React from "react";
import "./index.scss";
import SideBar from "../side-bar";
import NavBarAdmin from "../nav-bar-admin";
import AdminDashBoard from "../adminDashboard";
import { Route } from "react-router-dom";
import GameDashBoard from "../gameDashboard";
import Adminusers from "../adminusers";
import AdminDetailGame from "../adminDetailGame";
import AdminProfile from "../adminProfile";

const AdminHome = () => {
  return (
    <div className="homeAdmin">
      <div className="sidebaradmin">
        <SideBar />
      </div>
      <div className="homeContainerAdmin">
        <div className="Nav-bar-admin">
          <NavBarAdmin/>
        </div>
        <Route exact path={"/admin"} component={AdminDashBoard} />
        <Route exact path={"/admin/games"} component={GameDashBoard} />
        <Route exact path={"/admin/user"} component={Adminusers} />
        <Route
          exact
          path={"/admin/games/detail/:id"}
          component={AdminDetailGame}
        />
        <Route exact path={"/admin/profile"} component={AdminProfile} />
      </div>
    </div>
  );
};

export default AdminHome;
