import RpgGameImg from "../assets/Images/rpg-game.png";
import LibraryMovie from "../assets/Images/movie-library.jpg";

const projectList = [
  {
    name: "Movie Library",
    description:
      "Créer une bibliothèque de films avec React en utilisant l'API TMDB, les hooks useState, useEffect et useContent.",
    link: "https://movie-library-orcin.vercel.app/",
    image: LibraryMovie,
    icons: ["html", "css", "javascript", "react"],
    size: 32,
  },
  {
    name: "RPG Game",
    description:
      "Mini jeux avec javascript qui permet de simuler un combat style RPG",
    link: "https://rjrt-web.github.io/rpg-combat/",
    image: RpgGameImg,
    icons: ["html", "css", "javascript"],
    size: 32,
  },
];

export default projectList;
