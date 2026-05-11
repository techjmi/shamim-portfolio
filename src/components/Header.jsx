"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { HEADER } from '@/constant/header-constant';
import { Icon } from '@/icons';
import Drawer from '@/components/ui/Drawer';
import MobileMenu from './header/MobileMenu';
import './header.scss';
import { logo_url, site_author } from '@/constant/global-constant';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
const header={
  img: logo_url,
  title:site_author,
  link:'/'
}
  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          {/* Logo */}
          <Link href="/" className="header-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={HEADER.logoUrl} alt={HEADER.altText} className="logo-image" />
            <span className="logo-text">{HEADER.title}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="header-nav desktop-nav">
            {HEADER.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Menu Button */}
          <div className="header-actions">
            <a
              href={HEADER.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              <Icon name="download" size={18} />
              <span>{HEADER.cta.label}</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Toggle menu"
            >
              <Icon name="menu" size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <Drawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        position="right"
        header={header}
      >
        <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
      </Drawer>
    </>
  );
}