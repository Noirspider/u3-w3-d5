import { Col, Row } from "react-bootstrap";
import TopBar from "./TopBar";
import { useEffect, useState } from "react";
import AlbumDetails from "./AlbumDetails";
import AlbumArtist from "./AlbumArt";
import { useDispatch, useSelector } from "react-redux";

const AlbumSinglePage = () => {
  const [albumState, setAlbumState] = useState(null);
  const dispatch = useDispatch();

  const fetchDetails = async () => {
    let albumId = new URLSearchParams(document.location.search).get("id");
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/" + albumId, {
        method: "GET",
      });

      if (response.ok) {
        let album = await response.json(); // transforms the response into a JSON
        setAlbumState(album);
      } else {
        // something went wrong with the request --> i.e. headers missing, wrong HTTP Method
        document.querySelector("#img-container").innerHTML = "NOT OK" + (await response.text());
      }
    } catch (exception) {
      // ex.: Url is not correct, Internal Server Error
      document.querySelector("#img-container").innerHTML = exception;
    }
  };

  useEffect(() => {
    fetchDetails();
    console.log(albumState);
  }, []);

  return (
    <>
      <TopBar />
      <Row>
        <Col md={3} className="pt-5 text-center" id="img-container">
          {albumState && <AlbumArtist album={albumState} />}
        </Col>
        <Col md={8} className="p-5">
          <Row>
            <Col md={10} className="mb-5" style={{ textDecoration: "none" }} id="trackList">
              {albumState && <AlbumDetails album={albumState} />}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
export default AlbumSinglePage;
