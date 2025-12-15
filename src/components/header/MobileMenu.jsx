"use client";
import Link from 'next/link';
import { HEADER } from '@/constant/header-constant';
import { Icon } from '@/icons';
import './mobile-menu.scss';

export default function MobileMenu({ onClose }) {
  return (
    <div className="mobile-menu">
      {/* Logo */}
      <div className="mobile-menu-header">
        <Link href="/" className="mobile-menu-logo" onClick={onClose}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={HEADER.logoUrl} alt={HEADER.altText} className="logo-image" />
          <span className="logo-text">{HEADER.title}</span>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="mobile-menu-nav">
        {HEADER.navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="mobile-menu-link"
            onClick={onClose}
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* CTA Button */}
      <div className="mobile-menu-footer">
        <a
          href={HEADER.cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-menu-cta"
          onClick={onClose}
        >
          <Icon name="download" size={18} />
          <span>{HEADER.cta.label}</span>
        </a>
      </div>
    </div>
  );
}

