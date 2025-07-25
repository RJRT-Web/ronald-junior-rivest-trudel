import ProfilImage from "./ProfilImage";
import Icon from "./Icon";

function ProfilCard({ profil }) {
  return (
    <div className="row-container">
      <ProfilImage imageUrl={profil.imageUrl} altText={profil.altText} />
      <div className="profil-description">
        <h1>{profil.name}</h1>
        <p>{profil.description}</p>
        <p>
          <Icon icons="location" size={24} /> {profil.location}
        </p>
        <div className="icon-container">
          <a
            href="Ronald Junior Rivest-Trudel CV FR.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="icon-button">
              <Icon icons="download" size={24} />
              <span>{profil["cv-name"]}</span>
            </button>
          </a>
          <div className="media-container">
            <a
              href="mailto:ronaldjunior.rivesttrudel@hotmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icons="email" size={32} />
            </a>
            <a
              href="https://github.com/RJRT-Web"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icons="github" size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/ronald-junior-rivest-trudel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icons="linkedin" size={32} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilCard;
