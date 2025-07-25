function ProfilImage({ imageUrl, altText }) {
  return (
    <img src={imageUrl} alt={altText} className="profil-image" rel="preload" />
  );
}

export default ProfilImage;
