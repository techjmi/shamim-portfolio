"use client";
import { useEffect } from "react";
import { Icon } from "@/icons";
import "./drawer.scss";
import Link from 'next/link';
export default function Drawer({
  isOpen,
  onClose,
  children,
  title,
  position = "right",
  header,
}) {
  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="drawer-overlay" onClick={onClose} />

      {/* Drawer */}
      <div
        className={`drawer drawer--${position}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="drawer-header">
          {header && (
            <div className="mobile-menu-heade">
              <Link href="/" className="mobile-menu-logo" onClick={onClose}>
                <img
                  src={header.img}
                  alt='logo'
                  className="logo-image"
                />
                <span className="">{header.title}</span>
              </Link>
            </div>
          )}
          <button
            className="drawer-close"
            onClick={onClose}
            aria-label="Close drawer"
          >
            <Icon name="x" size={24} />
          </button>
        </div>
        {/* content */}
        <div className="drawer-content">{children}</div>
      </div>
    </>
  );
}
