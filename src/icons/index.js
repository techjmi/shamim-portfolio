// Centralized icons for easy reuse; pass `size` as prop
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { FiMail, FiArrowRight, FiDownload, FiMapPin, FiHeart, FiMenu, FiX } from "react-icons/fi";

// Icon mapping object
const ICONS = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  instagram: FaInstagram,
  facebook: FaFacebook,
  mail: FiMail,
  email: FiMail,
  mapPin: FiMapPin,
  location: FiMapPin,
  heart: FiHeart,
  arrowRight: FiArrowRight,
  download: FiDownload,
  menu: FiMenu,
  x: FiX,
};
// Generic Icon component
export function Icon({ name, size = 18, color, className, ...props }) {
  const IconComponent = ICONS[name];
  if (!IconComponent) return null;
  return <IconComponent size={size} color={color} className={className} {...props} />;
}

// Named exports for backward compatibility
export const GithubIcon = ({ size = 20, className = "" }) => (
  <FaGithub size={size} className={className} />
);
export const LinkedinIcon = ({ size = 20, className = "" }) => (
  <FaLinkedin size={size} className={className} />
);
export const TwitterIcon = ({ size = 20, className = "" }) => (
  <FaTwitter size={size} className={className} />
);
export const InstagramIcon = ({ size = 20, className = "" }) => (
  <FaInstagram size={size} className={className} />
);
export const FacebookIcon = ({ size = 20, className = "" }) => (
  <FaFacebook size={size} className={className} />
);
export const MailIcon = ({ size = 20, className = "" }) => (
  <FiMail size={size} className={className} />
);
export const MapPinIcon = ({ size = 20, className = "" }) => (
  <FiMapPin size={size} className={className} />
);
export const HeartIcon = ({ size = 20, className = "" }) => (
  <FiHeart size={size} className={className} />
);
export const ArrowRightIcon = ({ size = 18, className = "" }) => (
  <FiArrowRight size={size} className={className} />
);
export const DownloadIcon = ({ size = 18, className = "" }) => (
  <FiDownload size={size} className={className} />
);

// Export the ICONS object for direct access if needed
export { ICONS };

