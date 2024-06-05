import React from "react";
import "./Modal.css";

export default function Modal({ closeModal, content }) {
  return (
    <div className="BackGround" onClick={() => closeModal()}>
      <div className="Modal" onClick={(e) => e.stopPropagation()}>
        {/* <div className="closeHeader">
          <button className="closeButton" onClick={() => closeModal()}>
            x
          </button>
        </div> */}
        <div className="modalContent">{content}</div>
      </div>
    </div>
  );
}
