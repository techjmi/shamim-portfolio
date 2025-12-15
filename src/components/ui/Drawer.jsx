"use client";
import { useEffect } from 'react';
import { Icon } from '@/icons';
import './drawer.scss';

export default function Drawer({ isOpen, onClose, children, title, position = 'right' }) {
  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="drawer-overlay" onClick={onClose} />

      {/* Drawer */}
      <div className={`drawer drawer--${position}`} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        {title && (
          <div className="drawer-header">
            <h2 className="drawer-title">{title}</h2>
            <button
              className="drawer-close"
              onClick={onClose}
              aria-label="Close drawer"
            >
              <Icon name="x" size={24} />
            </button>
          </div>
        )}

        {/* Content */}
        <div className="drawer-content">
          {children}
        </div>
      </div>
    </>
  );
}

