import React from "react";
import styled from "styled-components";
import { Wall, Flex, Toner } from "../../../images/imageList";

function LatestStories() {
  return (
    <LatestContainer>
      <main className="section-align">
        {" "}
        <div className="panel_1">
          <div id="img-1">
            <img src={Wall} alt="wall" />
            <h1>Here's What No One Tells You About Fashion</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              viverra nulla eget iaculis rutrum. Nunc sodales molestie lorem, eu
              lacinia erat gravida consectetur.
            </p>
          </div>
          <div id="img-2">
            <img src={Flex} alt="wall" />
            <h1>This Week's Top Stories About Fashion</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              viverra nulla eget iaculis rutrum. Nunc sodales molestie lorem, eu
              lacinia erat gravida consectetur.
            </p>
          </div>
        </div>
        <div className="panel_2">
          <h1>Latest Stories</h1>
          <img src={Toner} alt="Toner" />
          <p>
            Aliquam egestas, sem vel porta mattis, massa sem facilisis ligula,
            vitae tincidunt eros nunc sed lorem. Suspendisse maximus lorem
            sapien, id viverra leo malesuada at. Morbi pulvinar tellus ut
            bibendum consectetur. Nullam faucibus erat et leo laoreet, sit amet
            interdum mauris feugiat. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Morbi sit
            amet mollis felis, sit amet tincidunt tellus.{" "}
          </p>
        </div>
      </main>
    </LatestContainer>
  );
}

export default LatestStories;

const LatestContainer = styled.section`
  display: flex;

  width: 100%;
  background-color: #000000;
  margin: 50px 0 50px 0;
  main {
    display: flex;
    justify-content: center;
    max-width: 1200px;
    padding: 30px 25px 30px 25px;
    gap: 40px;
  }
  .panel_1 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 375px;
    color: white;
    gap: 50px;
    h1 {
      font-size: 2.7rem;
      margin: 10px 0 10px 0;
    }
    p {
      font-size: 1.4rem;
      opacity: 0.8;
    }
    img {
      width: 100%;
      aspect-ratio: 16/11;
      object-fit: cover;
      object-position: center;
      border: 2px solid white;
    }
  }

  .panel_2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    max-width: 700px;
    color: white;
    h1 {
      font-size: 5rem;
      margin: 10px 0 10px 0;
      width: 100%;
    }
    p {
      font-size: 1.4rem;
      opacity: 0.8;
    }
    img {
      width: 100%;

      aspect-ratio: 16/11;
      object-fit: cover;
      object-position: center;
      border: 2px solid white;
    }
  }

  @media screen and (max-width: 800px) {
    main {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }
`;
