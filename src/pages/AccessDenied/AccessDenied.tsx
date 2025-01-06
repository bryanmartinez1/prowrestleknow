import React from "react";
import lock from "../../assets/icons/lock.svg";
import "./access_denied.css";

export default function AccessDenied() {
  return (
    <div className="access_denied-page">
      <img src={lock} alt="Access Denied" className="access_denied-img" />
      <div className="access_denied-title">Access Denied</div>
      <div className="access_denied-p">You do not have access to this page</div>
      <div className="access_denied-p">
        Please check you your credientals and try again
      </div>
    </div>
  );
}
