import { Link } from "react-router-dom";

const AlbumCard = ({ elem }) => {
  return (
    <>
      <div class="col text-center" id={elem.id}>
        <Link to={`/album_page.html?id=${elem.album.id}`}>
          <img class="img-fluid" src={elem.album.cover_medium} alt="img" />
        </Link>
        <p>
          <Link style={{ textDecoration: "none", fontSize: "2em" }} to={`/album_page.html?id=${elem.album.id}`}>
            {elem.album.title.length < 16 ? `${elem.album.title}` : `${elem.album.title.substring(0, 16)}...`}
          </Link>
        </p>
        <p>
          <Link style={{ textDecoration: "none", fontSize: "1.5em" }} to={`/artist_page.html?id=${elem.artist.id}`}>
            {" "}
            {elem.artist.name}
          </Link>
        </p>
      </div>
    </>
  );
};
export default AlbumCard;
