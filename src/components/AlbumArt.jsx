const AlbumArtist = ({ album }) => {
  return (
    <>
      <img src={album.cover} className="card-img img-fluid" alt="Album" />
      <div className="mt-4 text-center">
        <p className="album-title">{album.title}</p>
        <p className="artist-name">{album.artist.name}</p>
        <button id="btnPlay" className="btn btn-success mt-4" type="button">
          Play
        </button>
      </div>
    </>
  );
};

export default AlbumArtist;
