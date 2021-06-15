import React, { useEffect } from "react";
import UserService from "../../../services/user.service";

import TableauLocation from "./tableau";
import CreateLocation from "./create";
import UpdateLocation from "./update";
import DeleteLocation from "./delete";

import logo from "../../../assets/pictures/dark_logo.png";

const Location = () => {
  useEffect(() => {
    UserService.getAdminBoard().then(
      () => {
        console.log("Success Admin connect");
      },
      (error) => {
        console.log("Fail connect Admin");
      }
    );
  }, []);

  return (
    <div className="mt-5 container">
      <ul className="nav nav-tabs" style={{ marginTop: 100 }}>
        <li className="nav-item">
          <a className="nav-link" href="/admin/">
            DashBoard
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link active"
            aria-current="page"
            href="/admin/location"
          >
            Location
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/admin/locker">
            Locker
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/admin/blog">
            Blog
          </a>
        </li>
      </ul>

      <div className="row mt-5">
        <div className="col-sm-8">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <button
                className="nav-link active"
                id="tableau-tab"
                data-bs-toggle="tab"
                data-bs-target="#tableau"
                type="button"
                role="tab"
                aria-controls="tableau"
                aria-selected="true"
              >
                Tableau
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                id="create-tab"
                data-bs-toggle="tab"
                data-bs-target="#create"
                type="button"
                role="tab"
                aria-controls="create"
                aria-selected="false"
              >
                Créer
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Mettre à jour
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact"
                type="button"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Supprimer
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="tableau"
              role="tabpanel"
              aria-labelledby="tableau-tab"
            >
              <TableauLocation />
            </div>
            <div
              className="tab-pane fade"
              id="create"
              role="tabpanel"
              aria-labelledby="create-tab"
            >
              <CreateLocation />
            </div>
            <div
              className="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <UpdateLocation />
            </div>
            <div
              className="tab-pane fade"
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              <DeleteLocation />
            </div>
          </div>
        </div>
        <div className="col-sm-4 container mt-5">
          <div className="text-center mb-5">
            <img src={logo} alt="casety logo" />
          </div>
          <div className="card ">
            <div className="card-header">Raccourcis</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <a href="/admin/">DashBoard</a>
              </li>
              <li className="list-group-item active">
                <a href="/admin/location" className="link-light">
                  Location
                </a>
              </li>
              <li className="list-group-item">
                <a href="/admin/locker">Locker</a>
              </li>
              <li className="list-group-item">
                <a href="/admin/blog">Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
