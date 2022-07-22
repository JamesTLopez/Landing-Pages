import React from "react";
import styled from "styled-components";
import Home from "./Sections/Home";
import { AiFillInstagram, AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import LatestStories from "./Sections/LatestStories";

function FashionBlog() {
  return (
    <Container>
      <header>
        <div className="wrapper section-align">
          <div id="logo">D - Shape</div>
          <div id="nav">
            <a href="#home">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#blog">BLOG</a>
            <a href="#contact">CONTACT</a>
          </div>
          <div id="socials">
            <AiFillInstagram size="30px" />
            <FaFacebookSquare size="30px" />
            <AiOutlineGoogle size="30px" />
          </div>
        </div>
      </header>
      <Home />
      <LatestStories />
    </Container>
  );
}

export default FashionBlog;

const Container = styled.div`
  min-height: inherit;
  background-color: #f5f2e9;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  header {
    width: 100%;
    font-size: 1.5rem;
    border-bottom: 1px solid black;
    background-color: #eb5757;
    .wrapper {
      display: flex;
      max-width: 1200px;
      #logo {
        flex: 1;
        justify-content: center;
        font-size: 3rem;
        border-right: 1px solid black;
        font-family: "Permanent Marker", cursive;
      }
      #nav {
        flex: 3;
        gap: 30px;
        border-right: 1px solid black;
        a {
          color: black;
          text-decoration: none;
        }
      }
      #socials {
        flex: 1;
        gap: 30px;
      }
      & > * {
        padding: 15px 0 15px 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  @media screen and (max-width: 800px) {
    header {
      .wrapper {
        flex-direction: column;
        #nav {
          padding: 0;
        }
      }
    }
  }
`;
