import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import TopBar from "./TopBar";
import AlbumCard from "./AlbumCard";
import { useSelector } from "react-redux";

const Home = () => {
  const [artists, setArtists] = useState({
    rock: ["queen", "u2", "pinkfloyd", "eagles", "thedoors", "oasis", "thewho", "bonjovi"],
    pop: ["883", "coldplay", "jovanotti", "jamesblunt", "katyperry", "arianagrande"],
    hipHop: ["eminem", "snoopdogg", "caparezza", "j-ax", "rancore"],
  });
  const [homeArtists, setHomeArtists] = useState({ rock: [], pop: [], hipHop: [] });

  const searchResults = useSelector((state) => state.GeneralReducers.searchResults);
  const activeSearch = useSelector((state) => state.GeneralReducers.activeSearch);

  const fetchArtistData = async (artistName) => {
    try {
      const response = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${artistName}`, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "be9aa8f80cmshcb87ef0073d5d4ep15813fjsn4ee3c6fb8586",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      });

      if (response.ok) {
        const result = await response.json();
        return result.data[0];
      } else {
        console.log("error");
        return null;
      }
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  const handleRandomArtists = async (category) => {
    const artistList = artists[category];
    const selectedArtists = new Set();
    while (selectedArtists.size < 4) {
      const randomIndex = Math.floor(Math.random() * artistList.length);
      selectedArtists.add(artistList[randomIndex]);
    }

    const fetchedArtists = await Promise.all(Array.from(selectedArtists).map((artist) => fetchArtistData(artist)));

    setHomeArtists((prevState) => ({ ...prevState, [category]: fetchedArtists.filter(Boolean) }));
  };

  useEffect(() => {
    Object.keys(artists).forEach((category) => handleRandomArtists(category));
  }, []);

  const renderCategory = (category) => (
    <Row key={category}>
      <Col xs={10}>
        <div id={category}>
          <h2>{category === "rock" ? "Rock Classics" : category === "pop" ? "Pop Culture" : "HipHop"}</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
            {homeArtists[category].map((elem, i) => (
              <AlbumCard key={`${category}${i}`} elem={elem} />
            ))}
          </div>
        </div>
      </Col>
    </Row>
  );

  return (
    <>
      <TopBar />
      {activeSearch && (
        <Row>
          <Col xs={10}>
            <div id="searchResults">
              <h2>Search Results</h2>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                {searchResults.map((elem, i) => (
                  <AlbumCard key={`albumSearch${i}`} elem={elem} />
                ))}
              </div>
            </div>
          </Col>
        </Row>
      )}
      {Object.keys(homeArtists).map((category) => renderCategory(category))}
      <br />
      <br />
      <br />
    </>
  );
};

export default Home;
