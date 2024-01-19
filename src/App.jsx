import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import ArtistPage from "./components/ArtistPage";
import AlbumPage from "./components/AlbumPage";
import Favourites from "./components/Favourites";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container fluid>
          <Row>
            <Col xs={2}>
              <Sidebar />
            </Col>
            <Col xs={12} md={9} className="offset-md-3 mainPage">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/artist_page.html" element={<ArtistPage />} />
                <Route path="/album_page.html" element={<AlbumPage />} />
                <Route path="/favourites.html" element={<Favourites />} />
              </Routes>
              <Player />
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
