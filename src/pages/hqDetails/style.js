import styled from "styled-components";
import imgDetails from "../../assets/hqs.jpeg";

export const MainDetail = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${imgDetails});

  section {
    margin-top: 30px;
    padding: 10px;
    background-color: var(--color-hover);
    display: flex;
    flex-direction: column;
    width: 100%;
    @media (min-width: 768px) {
      flex-direction: row;
      width: 80%;
    }

    img {
      width: 280px;
      height: 330px;
    }
  }
`;
