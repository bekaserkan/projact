import React from "react";
import "./Notify.css";
import bell from "../../img/bell.svg";

function Notify() {
  return (
    <div className="notify">
      <div className="container">
        <h1>Уведомления</h1>
        <div className="empty">
          <img src={bell} />
          <p>Список уведомлений пуст</p>
        </div>
        <div className="render"></div>
      </div>
    </div>
  );
}

export default Notify;
