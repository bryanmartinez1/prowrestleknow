import React, { useEffect, useRef } from "react";
import ImageButton from "../buttons/ImageButton";
import Close from "../../assets/icons/x.svg";
import "./modal.css";
import { closeButtonProperties } from "../../defaultCSS/Button";
import { ModalProps } from "../../types/components";

export default function Modal({
  show,
  hide,
  content,
  width = "50%",
  height = "50%",
  title = "",
  maxWidth = "none",
  maxHeight = "none",
  minWidth = "none",
  minHeight = "none",
  titleSize = "32px",
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      hide();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  if (!show) return null;

  return (
    <div
      className="modalContent"
      style={{ width, height, maxWidth, maxHeight, minHeight, minWidth }}
      ref={modalRef}
      data-testid="modal"
    >
      <div className="modalCloseHeader">
        <div className="modalTitle" style={{ fontSize: titleSize }}>
          {title}
        </div>
        <ImageButton
          src={Close}
          alt="Close"
          toolTipText="Close"
          onClick={hide}
          {...closeButtonProperties}
        />
      </div>
      <div className="modalBody">{content}</div>
    </div>
  );
}
