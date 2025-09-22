import PropTypes from "prop-types";
import {
  EmailIcon,
  GitHubIcon,
  LinkedInIcon,
  HtmlIcon,
  CssIcon,
  JsIcon,
  ReactIcon,
  NextIcon,
  VueIcon,
  TypescriptIcon,
  ConfluenceIcon,
  FigmaIcon,
  BootstrapIcon,
  BarMenuIcon,
  CloseIcon,
  DownloadIcon,
  LocationIcon,
  Word,
  Excel,
  Powerpoint,
  Photoshop,
  Illustrator,
  Wordpress,
  Drupal,
  Shopify,
} from "../assets/icons/ListIcon.jsx";
import { i } from "framer-motion/client";

const iconMap = {
  email: EmailIcon,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  html: HtmlIcon,
  css: CssIcon,
  javascript: JsIcon,
  react: ReactIcon,
  next: NextIcon,
  vue: VueIcon,
  typescript: TypescriptIcon,
  figma: FigmaIcon,
  confluence: ConfluenceIcon,
  bootstrap: BootstrapIcon,
  "bar-menu": BarMenuIcon,
  close: CloseIcon,
  download: DownloadIcon,
  location: LocationIcon,
  word: Word,
  excel: Excel,
  powerpoint: Powerpoint,
  photoshop: Photoshop,
  illustrator: Illustrator,
  wordpress: Wordpress,
  drupal: Drupal,
  shopify: Shopify,
};

const colorMap = {
  location: "red",
  github: "#fff",
  email: "#D44638",
  linkedin: "#0077B5",
  html: "#E34F26",
  css: "#1572B6",
  javascript: "#F7DF1E",
  react: "#61DAFB",
  next: "#000000",
  vue: "#4FC08D",
  typescript: "#3178C6",
  figma: "#F24E1E",
  confluence: "#172B4D",
  bootstrap: "#7952B3",
  word: "#2B579A",
  excel: "#217346",
  powerpoint: "#D24726",
  photoshop: "#31A8FF",
  illustrator: "#FF9A00",
  wordpress: "#21759B",
  drupal: "#0678BE",
  shopify: "#96BF48",

  // Add more as needed
};

function Icon({ icons, size = 24, color }) {
  const IconComponent = iconMap[icons];
  const resolvedColor = color || colorMap[icons] || "currentColor";

  if (!IconComponent) return null;
  return (
    <IconComponent
      width={size}
      height={size}
      fill={resolvedColor}
      className="icon"
    />
  );
}

Icon.propTypes = {
  icons: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
};

export default Icon;
