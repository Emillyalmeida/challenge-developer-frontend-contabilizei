import styled from "styled-components";
import imgCheckout from "../../assets/imageCheckout.jpg";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100%;
  background-image: url(${imgCheckout});
  background-position: right;
  overflow-y: auto;
`;

export const LogoHeader = styled.header`
  background-color: var(--color-main);
  color: var(--color-secundary);
  height: 10vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;

  h1 {
    font-size: 3rem;
  }
`;

export const DetailsDemand = styled.section`
  margin-top: 6vh;
  margin-bottom: 50px;
  padding: 10px;
  background-color: var(--color-hover);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: auto;
  position: relative;
  @media (min-width: 768px) {
    width: 80%;
    max-width: 500px;
    padding: 20px;
  }

  h2 {
    color: var(--color-main);
    padding-bottom: 2rem;
  }

  > section {
    padding: 0 15px;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 1rem;

    > div {
      display: flex;
      justify-content: space-between;
      padding-bottom: 3px;
    }
  }

  > div {
    padding: 0 15px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-bottom: 1rem;

    input {
      flex: 1;
      height: 35px;
      border-radius: 5px;

      &::placeholder {
        padding-left: 8px;
      }
    }

    button {
      margin-left: 1rem;
      width: 70px;
      height: 35px;
      border: none;
      border-radius: 5px;
      background-color: var(--color-main);
      color: var(--color-hover);
    }
  }

  button {
    width: 90%;
    height: 40px;
    border: none;
    border-radius: 5px;
    background-color: var(--color-main);
    color: var(--color-hover);
  }
`;
