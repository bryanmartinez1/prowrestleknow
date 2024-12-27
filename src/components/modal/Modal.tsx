import React, { useEffect, useRef, ReactNode } from "react";
import ImageButton from "../buttons/ImageButton";
import Close from "../../icons/x.svg";
import "./modal.css";
import { closeButtonProperties } from "../../defaultCSS/Button";

export interface ModalProps {
  show: boolean;
  hide: () => void;
  content: ReactNode;
  width?: string;
  height?: string;
  title?: string;
  maxWidth?: string;
  maxHeight?: string;
  minWidth?: string;
  minHeight?: string;
}

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
    >
      <div className="modalCloseHeader">
        <div className="modalTitle">{title}</div>
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
