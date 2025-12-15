import { FOOTER } from '@/constant/footer-constant';
import { Icon } from '@/icons';
import './footer.scss';

const ICONS = {
  github: <Icon name="github" size={20} />,
  linkedin: <Icon name="linkedin" size={20} />,
  facebook: <Icon name="facebook" size={20} />,
  instagram: <Icon name="instagram" size={20} />,
  twitter: <Icon name="twitter" size={20} />,
};

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          {/* About Column */}
          <div className="footer-column footer-about">
            <h3 className="footer-heading">{FOOTER.brand.name}</h3>
            <p className="footer-tagline">{FOOTER.brand.tagline}</p>
            <p className="footer-description">{FOOTER.description}</p>
          </div>

          {/* Sections - Using flex-row on mobile, flex-col on desktop */}
          {FOOTER.sections.map((section) => (
            <div key={section.title} className="footer-column">
              <h4 className="footer-column-title">{section.title}</h4>
              <nav className="footer-links flex flex-row md:flex-col gap-2">
                {section.links.map((link) => (
                  <a key={link.href} href={link.href} className="footer-link hover:opacity-100 opacity-80">
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          ))}

          {/* Contact Column */}
          <div className="footer-column">
            <h4 className="footer-column-title">Contact</h4>
            <div className="footer-contact">
              <a
                href={`mailto:${FOOTER.contact.email}`}
                className="footer-contact-item"
              >
                <Icon name="mail" size={18} />
                <span>{FOOTER.contact.email}</span>
              </a>
              <div className="footer-contact-item">
                <Icon name="mapPin" size={18} />
                <span>{FOOTER.contact.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p className="footer-copyright">{FOOTER.copyright}</p>
            <p className="footer-built">
              {FOOTER.builtWith} <Icon name="heart" size={14} className="footer-heart" />
            </p>
          </div>

          {/* Social Links */}
          <div className="footer-social">
            {FOOTER.socials.map((social) => (
              <a
                key={social.key}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="footer-social-link"
              >
                {ICONS[social.key]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

