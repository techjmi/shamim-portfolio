/*
Popup component, use to show some advertisement or any other content
this will be shown on the top right corner of the page
this will be shown only on the home page
automatically close after 3 seconds (default) or custom time
if the user click on the close button or outside of the popup it will be closed
**/

"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Icon } from '@/icons';
import './popup.scss';

const Popup = ({
    title,
    description,
    cta,
    ctaLink,
    image,
    className = "",
    children,
    autoClose = true,
    autoCloseTime = 3000, // 3 seconds default
    onClose,
    ...rest
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (!autoClose) return;

    // Update progress bar every 50ms for smooth animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const decrement = (100 / autoCloseTime) * 50;
        return Math.max(0, prev - decrement);
      });
    }, 50);

    // Auto close after specified time
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose();
    }, autoCloseTime);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [autoClose, autoCloseTime, onClose]);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target.id === 'popup-overlay') {
      handleClose();
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className="popup-overlay"
      id="popup-overlay"
      onClick={handleOverlayClick}
    >
      <div className={`popup ${className}`} {...rest}>
        <div className="popup-content">
          {/* Close button */}
          <button className="popup-close" onClick={handleClose} aria-label="Close popup">
            <Icon name="x" size={20} />
          </button>

          {/* Image */}
          {image && (
            <div className="popup-image-wrapper">
              <Image
                src={image}
                alt={title || "Popup image"}
                width={400}
                height={200}
                className="popup-image"
              />
            </div>
          )}

          {/* Header */}
          <div className="popup-header">
            <h3 className="popup-title">{title}</h3>
          </div>

          {/* Description */}
          <div className="popup-body">
            {description && <p className="popup-description">{description}</p>}
            {children}
          </div>

          {/* CTA Button */}
          {cta && ctaLink && (
            <div className="popup-footer">
              <a
                href={ctaLink}
                className="popup-cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                {cta}
                <Icon name="arrowRight" size={16} />
              </a>
            </div>
          )}

          {/* Progress bar */}
          {autoClose && (
            <div className="popup-progress-bar">
              <div
                className="popup-progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;