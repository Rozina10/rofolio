import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css";

export const NavbarComponent = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const path = window.path


  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const top = section.offsetTop - 88; 
        const bottom = top + section.offsetHeight;
        if(window.scrollY === 0) {
          setActiveLink("home");
        }
        else if (window.scrollY >= top && window.scrollY < bottom) {
          setActiveLink(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLetsConnect = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`my-navbar ${scrolled ? "scrolled" : ""}`}
    >
      <Container>
        <Navbar.Brand href="#home">
          <h1>Rozfolio</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {["home", "skills", "projects", "contact"].map((section) => (
              <Nav.Link
                key={section}
                href={`#${section}`}
                className={
                  activeLink === section ? "active navbar-link" : "navbar-link"
                }
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Nav.Link>
            ))}
          </Nav>
          <span className="navbar-text">
            <button
              className="vvd"
              onClick={(e) => {
                e.preventDefault();
                handleLetsConnect(
                  "https://www.linkedin.com/in/rozina-mehmood-59a150286/"
                );
              }}
            >
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
