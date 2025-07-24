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
} from "../assets/icons/ListIcon.jsx";

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
