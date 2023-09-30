import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import tfgLogoImage from "../../images/tfg-logo-01.png";
import { Link } from "react-router-dom";
import { MainMenu } from "./mainMenu";

export const NavBar = () => {
  return (
    <Navbar sticky="top">
      <Container>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Navbar.Brand>
            <small>{"HQ "}</small>
            <img alt="techForGood logo" src={tfgLogoImage} height={"50rem"} />
          </Navbar.Brand>
        </Link>
        <Nav className="justify-content-end">
          <MainMenu />
        </Nav>
      </Container>
    </Navbar>
  );
};
