import React from "react";
import "./Tidings.css";
import { Loading } from "../UI/loading/loading";
import { NavLink } from "react-router-dom";

function Tidings({
  page,
  pages,
  error,
  setPage,
  isLoading,
  backends,
  onItemClick,
  dispatch,
}) {
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
        {error ? (
          <h1
            style={{
              width: "100%",
              fontSize: "2rem",
              color: "white",
              textAlign: "center",
            }}
          >
            {" "}
            {error}{" "}
          </h1>
        ) : (
          <div className="pagination">
            {pages.map((p, index) => (
              <div
                style={{
                  background: p === page ? "#0761dc" : "#ffffff",
                  color: p === page ? "#ffffff" : "#000",
                }}
                className="page"
                key={index}
                onClick={() => dispatch(setPage(p))}
              >
                {p}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Tidings;
