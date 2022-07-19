import { Link } from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <MainWrapper>
      <section className="title">
        <label>Landing Pages</label>
      </section>
      <section className="navigation">
        <ul>
          <li>
            <Link to="fashion-blog">Fashion Blog</Link>
          </li>
          <li>
            <Link to="fashion-blog">Musician</Link>
          </li>
        </ul>
      </section>
    </MainWrapper>
  );
}

export default App;

const MainWrapper = styled.main`
  font-family: "Roboto Slab", serif;
  font-weight: bold;
  min-height: inherit;
  background-color: #cfd8e0;
  color: #00141d;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .title {
    font-size: 3.5rem;
    line-height: 10rem;
  }
  .navigation {
    font-size: 2rem;
    ul {
      display: flex;
      gap: 10px;
      list-style: none;
    }

    a {
      text-decoration: none;
      color: #00141d;
      opacity: 0.7;
    }
  }
`;
