import React from "react";
import styled from "styled-components";

import { Model1, ArrowDown } from "../../../images/imageList";
function Home() {
  return (
    <HomeSectionWrapper>
      <main className="section-align">
        <BannerSection id="home">
          <div className="container">
            <div className="title">
              <h2>SIMPLY</h2>
              <h3>ELEGANT</h3>
              <img src={ArrowDown} alt="Arrow-Down" />
            </div>
            <div className="img_container">
              <img src={Model1} alt="img-woman" />
            </div>
            <div className="sub-description">
              <h2>
                Designer Women With
                <br /> Beautiful Session
              </h2>
              <div className="bottom-description">
                <p>
                  Like So Many Things,The Race Was Canceled. Soon After, Gyms
                  Around The Country Were Closed.Suddenlt, Running -- A Solo
                  Activity That Can Be Done Outdoors, Away For Other People --
                  Seems More Important Than Ever, For Both Our Health And Our
                  Mood
                </p>
                <div className="img-arrow">
                  <img src={ArrowDown} alt="Arrow" />
                </div>
              </div>
            </div>
          </div>
        </BannerSection>
      </main>
    </HomeSectionWrapper>
  );
}

export default Home;

const HomeSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 200vh;
  max-height: 2000px;
  width: 100%;

  main {
    background: linear-gradient(
      to bottom,
      #eb5757 0%,
      #eb5757 58%,
      #f5f2e9 50%,
      #f5f2e9 100%
    );
  }
`;

const BannerSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    max-width: 1200px;
    padding: 0 25px 0 25px;
    .title {
      position: relative;
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-top: 20px;

      h2,
      h3 {
        letter-spacing: 10px;
        font-weight: bold;
        font-size: 13.75rem;
      }

      h2 {
        align-self: flex-start;
      }
      h3 {
        align-self: flex-end;
      }
      img {
        position: relative;
        left: 50px;
        top: -30px;
        height: 10rem;
        width: 10rem;
      }
    }
    .img_container {
      img {
        aspect-ratio: 16/9;
        object-fit: cover;
        object-position: center;
        border: 5px solid black;
      }
    }

    .sub-description {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h2 {
        margin: 20px 0 20px 0;
        font-size: 7.5rem;
        width: 100%;
      }
      .bottom-description {
        display: flex;
        align-items: center;

        p {
          flex: 1;
          font-size: 1.7rem;
          opacity: 0.8;
        }
        .img-arrow {
          position: relative;
          flex: 1;
          img {
            transform: rotate(-90deg);
            height: 12rem;
            width: 12rem;
            padding: 10px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 800px) {
    .container {
      .title {
        width: 100%;
        padding: 0;
        h2,
        h3 {
          font-size: 8rem;
        }
        img {
          left: 0;
          top: 0;
          height: 10rem;
          width: 10rem;
        }
      }
      .sub-description {
        width: 100%;
        display: flex;
        flex-direction: column;
        h2 {
          margin: 30px 0 30px 0;
          font-size: 5.5rem;
        }
        .bottom-description {
          display: flex;
          flex-direction: column;
          p {
            flex: 1;
            font-size: 1.2rem;
            opacity: 0.8;
            text-align: center;
          }
          .img-arrow {
            img {
              transform: rotate(0deg);
              height: 10rem;
              width: 10rem;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 600px) {
    .container {
      .title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 0;
        h2,
        h3 {
          align-self: center;
          font-size: 6rem;
        }
        img {
          top: 0;
          height: 8rem;
          width: 8rem;
        }
      }
      .sub-description {
        h2 {
          font-size: 4rem;
          text-align: center;
        }
      }
    }
  }
  @media screen and (max-width: 400px) {
    .container {
      .title {
        width: 100%;
        padding: 0;

        img {
          left: 0;
          top: 0;
          height: 7rem;
          width: 7rem;
        }
      }
    }
  }
  @media screen and (max-width: 375px) {
    .container {
      padding: 0 5px 0 5px;
      .title {
        width: 100%;
        padding: 0;
      }
    }
  }
`;
