import { Button, Col, Row } from "react-bootstrap";
import TopBar from "./TopBar";
import { useEffect, useState } from "react";
import AlbumSingleCard from "./AlbumSingleCard";

const ArtistPage = () => {
  const [artist, setArtist] = useState(null);
  const [albums, setAlbums] = useState(null);
  const fetchArtist = async () => {
    let artistId = new URLSearchParams(document.location.search).get("id");
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/" + artistId, {
        method: "GET",
      });

      if (response.ok) {
        let artist = await response.json();
        setArtist(artist);
        let tracksResponse = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artist.name, {
          method: "GET",
        });

        if (tracksResponse.ok) {
          let tracklist = await tracksResponse.json();
          setAlbums(tracklist.data);
        }
      }
    } catch (exception) {}
  };
  useEffect(() => {
    fetchArtist();
  }, []);
  return (
    <>
      <TopBar />
      {artist && albums && (
        <>
          <Row>
            <Col xs={12} md={10} lg={10} className="mt-5">
              <h2 class="titleMain">{artist.name}</h2>
              <div id="followers">{artist.nb_fan} followers</div>
              <div class="d-flex justify-content-center" id="button-container">
                <Button variant="success" className=" me-2 mainButton " id="playButton">
                  PLAY
                </Button>
                <Button variant="outline-light" className=" mainButton " id="followButton">
                  FOLLOW
                </Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={10} md={10} lg={10}>
              <div class="mt-4 d-flex justify-content-start">
                <h2 class="text-white font-weight-bold">Tracks</h2>
              </div>
              <div class="pt-5 mb-5">
                <Row id="apiLoaded">
                  {albums.map((elem, i) => (
                    <Col sm={6} md={4} lg={3} xxl={2} className=" text-center mb-5" key={`album-${i}`}>
                      <AlbumSingleCard songInfo={elem} />
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};
export default ArtistPage;
