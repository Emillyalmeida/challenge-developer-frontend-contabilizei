import styled from "styled-components";
import imgDetails from "../../assets/hqs.jpeg";

export const MainDetail = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  background-image: url(${imgDetails});

  section {
    margin-top: 12vh;
    margin-bottom: 50px;
    padding: 10px;
    background-color: var(--color-hover);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: auto;
    @media (min-width: 768px) {
      flex-direction: row;
      width: 80%;
      padding: 20px;
    }

    img {
      width: 280px;
      height: 330px;
      @media (min-width: 769px) {
        width: 330px;
        height: 380px;
      }
    }

    div {
      display: flex;
      flex-direction: column;
      padding: 10px;
      max-width: 480px;

      h2 {
        color: var(--color-red-600);
        text-align: center;
        font-size: 1.75rem;
        padding: 20px;
      }

      ul {
        display: flex;
        flex-wrap: wrap;
        li {
          width: 45%;
          padding: 5px;
          span {
            font-size: 1.2rem;
          }
        }
      }

      p {
        text-align: justify;
        color: var(--color-red-900);
        font-weight: 400;
        padding-bottom: 15px;
        padding-top: 10px;
      }

      span {
        color: var(--color-red-800);
        padding-bottom: 15px;
        font-size: 1.5rem;
        text-align: center;
      }
      button {
        color: var(--color-secundary);
        background-color: var(--color-main);
        cursor: pointer;
        height: 50px;
        font-size: 1.5rem;

        &:hover {
          background-color: var(--color-red-800);
        }
      }
    }
  }
`;
