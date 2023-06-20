import React, { useState } from "react";
import "./Tidings.css";
import { Loading } from "../UI/loading/loading";
import { NavLink } from "react-router-dom";

function Tidings({ page, setPage, isLoading, backends, onItemClick }) {
  return (
    <div className="tidings">
      <div className="container">
        <h1>Новости</h1>
        {isLoading ? (
          <div className="loading_div">
            <Loading />
          </div>
        ) : (
          backends.map((backend) => (
            <div
              key={backend.id}
              onClick={() => onItemClick(backend)}
              className="card"
            >
              <img src={backend.img} />
              <div className="content">
                <h2>{backend.title}</h2>
                <p>{backend.text}</p>
                <span>{backend.data}</span>
                <NavLink to="Champions">
                  <button className="btn_read">читать дальше</button>
                </NavLink>
              </div>
            </div>
          ))
        )}
        <div className="post">
          <ul className="pagination">
            {[...Array(3)].map((_, i) => (
              <li
                key={i + "pagination"}
                onClick={() => setPage(i + 1)}
                className={page === i + 1 ? "active" : ""}
              >
                {i + 1}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Tidings;
