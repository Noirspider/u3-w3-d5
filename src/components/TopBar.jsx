import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <Row>
      <Col xs={9} lg={11} className="TopBar d-none d-md-flex">
        <Link style={{ textDecoration: "none" }} to={""}>
          TRENDING
        </Link>
        <Link style={{ textDecoration: "none" }} to={""}>
          PODCAST
        </Link>
        <Link style={{ textDecoration: "none" }} to={""}>
          MOODS AND GENRES
        </Link>
        <Link style={{ textDecoration: "none" }} to={""}>
          NEW RELEASE
        </Link>
        <Link style={{ textDecoration: "none" }} to={""}>
          DISCOVER
        </Link>
      </Col>
    </Row>
  );
};
export default TopBar;
