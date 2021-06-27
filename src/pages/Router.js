import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import AuthService from "../services/auth.service";

import Signin from "./users/Signin";
import BoardAdmin from "./admin/BoardAdmin";
import Location from "./admin/Location";
import Locker from "./admin/Locker";
import Blogs from "./admin/Blog";

import logo from "../assets/pictures/white_logo.png";

const Router = () => {
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [showUserBoard, setShowUserBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowUserBoard(user.roles.includes("ROLE_USER"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
    window.location.replace("login");
  };

  return (
    <BrowserRouter>
      {console.log(currentUser)}
      {currentUser ? (
        <header class="fixed w-full z-10 top-0 bg-white text-gray-700 body-font border-b border-gray-200">
          <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link
              className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
              to={"/"}
            >
              <div className="w-10 h-10 text-white bg-blue-500 rounded-full">
                <img
                  src={logo}
                  alt="logo"
                  width="20"
                  height="20"
                  className="ml-2.5 mt-2"
                />
              </div>
              <span className="ml-3 text-xl">CASETY</span>
            </Link>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              {showAdminBoard && (
                <Link
                  className="inline-flex items-center bg-blue-200 border-0 py-1 px-3 focus:outline-none hover:bg-blue-300 rounded text-base mt-4 md:mt-0"
                  to={"/admin"}
                >
                  Dashboard
                </Link>
              )}
              <Link
                onClick={logOut}
                className="ml-4 inline-flex items-center bg-red-200 border-0 py-1 px-3 focus:outline-none hover:bg-red-300 rounded text-base mt-4 md:mt-0"
                to={"/login"}
              >
                Déconnexion
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </nav>
          </div>
        </header>
      ) : (
        ""
      )}
      <Switch>
        {showAdminBoard ? (
          <>
            <Route exact path={["/", "/admin"]} component={BoardAdmin} />
            <Route exact path="/admin/location" component={Location} />
            <Route exact path="/admin/locker" component={Locker} />
            <Route exact path="/admin/blog" component={Blogs} />
          </>
        ) : (
          <>
            <Route exact path={["/", "/login"]} component={Signin} />
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
