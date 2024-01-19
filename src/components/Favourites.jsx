import { useDispatch, useSelector } from "react-redux";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { removeFav } from "../redux/actions";

const Favourites = () => {
  const fav = useSelector((state) => state.favourites.songs);
  const dispatch = useDispatch();

  return (
    <Container style={{ marginBottom: "100px" }}>
      <ListGroup>
        {fav.map((elem, i) => (
          <ListGroup.Item
            key={`fav${i}`}
            style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
          >
            <div style={{ flex: 1 }}>
              <div style={{ overflow: "hidden" }}>
                <img src={elem.albumCover} alt="albumCover" style={{ maxHeight: "20%" }} />
              </div>
            </div>
            <div style={{ flex: 1, textAlign: "center" }}>
              <h2>{elem.songTitle}</h2>
            </div>
            <div
              style={{ flex: 1, textAlign: "right", color: "red", cursor: "pointer" }}
              onClick={() => dispatch(removeFav(elem.songId))}
            >
              <i className="bi bi-trash"></i>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Favourites;
