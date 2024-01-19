import { Col, Container, Row } from "react-bootstrap";
import { Heart } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setLike } from "../redux/action";

const BottomNavBar = () => {
  let player = useSelector((state) => state.player.selectedAlbum);
  const dispatch = useDispatch();

  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col lg={10} className="offset-lg-2">
          <Row
            className="h-100 flex-column justify-content-center align-items-center"
            style={{ justifyContent: player ? "" : "center" }}
          >
            <Col
              xs={4}
              className=" align-items-center justify-content-center"
              style={{ display: player ? "flex" : "none" }}
            >
              <img src={player?.album.cover_medium} alt="" style={{ width: "70px", height: "70px" }} />
              <Heart
                color="white"
                className="ms-2"
                style={{ cursor: "pointer" }}
                onClick={() => dispatch(setLike(player?.title))}
              />
            </Col>

            <Col xs={6} md={4} className="playerControls">
              <div className="d-flex ms" style={{ display: player ? "block" : "none" }}>
                <span className="mb-0 text-center">{player?.artist.name}: </span>
                <span className="mb-0 text-center">{player?.title}</span>
              </div>
              <div className="d-flex">
                <Link to="/">
                  <img src="./assets/playerbuttons/shuffle.png" alt="shuffle" />
                </Link>
                <Link to="/">
                  <img src="./assets/playerbuttons/prev.png" alt="prev" />
                </Link>
                <Link to="/">
                  <img src="./assets/playerbuttons/play.png" alt="play" />
                </Link>
                <Link to="/">
                  <img src="./assets/playerbuttons/next.png" alt="next" />
                </Link>
                <Link to="/">
                  <img src="./assets/playerbuttons/repeat.png" alt="repeat" />
                </Link>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default BottomNavBar;
