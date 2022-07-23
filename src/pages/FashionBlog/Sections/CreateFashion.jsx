import React from "react";
import styled from "styled-components";
import { Model2, Model3, ArrowDown } from "../../../images/imageList";

function CreateFashion() {
  return (
    <CreateContainer>
      <main>
        <div className="top">
          <div className="text_container">
            <h1>Create Fashion With Beautiful Models</h1>
            <p>
              Vestibulum ut urna eu tellus hendrerit porttitor sit amet et
              lorem. Mauris ac massa eros. Vivamus faucibus odio id rutrum
              molestie. Cras aliquet tellus sem, eu egestas ipsum consectetur a.
            </p>
            <img src={ArrowDown} alt="Arrow-Down" />
          </div>
          <div className="img_container">
            <img src={Model3} alt="Model-2" />
          </div>
        </div>
        <div className="bottom">
          <img src={Model2} alt="model-2" />
        </div>
      </main>{" "}
    </CreateContainer>
  );
}

export default CreateFashion;

const CreateContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 50px 0 50px 0;
  main {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    padding: 30px 25px 30px 25px;
    gap: 90px;

    .top {
      display: flex;
      .text_container {
        display: flex;
        flex-direction: column;
        flex: 1;
        margin: 30px 0 30px 0;
        h1 {
          font-size: 5rem;
        }
        p {
          margin: 10px 0 10px 0;
          font-size: 1.4rem;
        }
        img {
          height: 8rem;
          width: 8rem;
        }
      }
      .img_container {
        flex: 1;
        img {
          width: 100%;
          aspect-ratio: 16/11;
          object-fit: cover;
          object-position: center;
          border: 2px solid black;
        }
      }
    }
    .bottom {
      display: flex;

      img {
        width: 100%;
        aspect-ratio: 16/11;
        object-fit: cover;
        object-position: center;
        border: 2px solid black;
        max-width: 800px;
      }
    }
    @media screen and (max-width: 800px) {
      .top {
        flex-direction: column;
        .text_container {
          align-items: center;
          text-align: center;
        }
      }
    }
  }
`;
