import Link from 'next/link';
import {
  footer_name,
  footer_tagline,
  footer_description,
  footer_quick_links,
  footer_sections_links,
  footer_social_links,
  footer_contact_info,
  footer_copyright,
  footer_built_with,
} from '@/constant/footer-constant';
import { typography_types } from '@/constant/typography-constant';
import { Icon } from '@/icons';
import './footer.scss';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          {/* About Column */}
          <div className="footer-column footer-about">
            <h3 className={`${typography_types.heading_3_bold} footer-heading`}>
              {footer_name}
            </h3>
            <p className={`${typography_types.caption_1_bold} footer-tagline`}>
              {footer_tagline}
            </p>
            <p className={`${typography_types.body_3_bold} footer-description`}>
              {footer_description}
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="footer-column">
            <h4 className={`${typography_types.heading_4_bold} footer-column-title`}>
              Quick Links
            </h4>
            <ul className="footer-links">
              {footer_quick_links.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className={`${typography_types.body_3_bold} footer-link`}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sections Column */}
          <div className="footer-column">
            <h4 className={`${typography_types.heading_4_bold} footer-column-title`}>
              Sections
            </h4>
            <ul className="footer-links">
              {footer_sections_links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className={`${typography_types.body_3_bold} footer-link`}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-column">
            <h4 className={`${typography_types.heading_4_bold} footer-column-title`}>
              Contact
            </h4>
            <div className="footer-contact">
              <a
                href={`mailto:${footer_contact_info.email}`}
                className={`${typography_types.body_3_bold} footer-contact-item`}
              >
                <Icon name="mail" size={18} />
                <span>{footer_contact_info.email}</span>
              </a>
              <div className={`${typography_types.body_3_bold} footer-contact-item`}>
                <Icon name="mapPin" size={18} />
                <span>{footer_contact_info.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p className={`${typography_types.caption_2_bold} footer-copyright`}>
              {footer_copyright}
            </p>
            <p className={`${typography_types.caption_2_bold} footer-built`}>
              {footer_built_with} <Icon name="heart" size={14} className="footer-heart" />
            </p>
          </div>

          {/* Social Links */}
          <div className="footer-social">
            {footer_social_links.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="footer-social-link"
              >
                <Icon name={social.icon} size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

