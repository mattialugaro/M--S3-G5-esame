import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import BottomNavBar from "./components/BottomNavBar";
import VerticalSideBar from "./components/VerticalSideBar";
import Main from "./components/Main";
import React from "react";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <VerticalSideBar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Row>
      </Container>
      <BottomNavBar />
    </div>
  );
}

export default App;
