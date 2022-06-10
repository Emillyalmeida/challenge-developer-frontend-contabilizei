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
    font-size: 2rem;
  }

  > section {
    position: relative;
    padding: 0 15px;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 1rem;

    > button {
      position: absolute;
      top: -65px;
      left: 20px;
      color: var(--color-secundary);
      background-color: var(--color-main);
      cursor: pointer;
      width: 30px;
      height: 25px;
      border: none;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: var(--color-red-800);
      }
    }

    > div {
      display: flex;
      justify-content: space-between;
      padding-bottom: 3px;

      h3 {
        font-size: 1.25rem;
      }
    }
  }

  > Form {
    padding: 0 15px;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 1rem;

    label {
      margin-left: 10px;
      padding-bottom: 0.5rem;
      font-weight: 700;
    }

    > div {
      width: 100%;
      display: flex;
      justify-content: space-between;

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

        &:hover {
          background-color: var(--color-red-800);
        }
      }
    }
    span {
      padding-top: 4px;
      margin-left: 8px;
      font-size: 0.8rem;
    }

    p {
      padding-top: 4px;
      margin-left: 8px;
    }
  }

  .red {
    color: var(--color-red-600);
  }

  button {
    width: 90%;
    height: 40px;
    border: none;
    border-radius: 5px;
    background-color: var(--color-main);
    color: var(--color-hover);

    &:hover {
      background-color: var(--color-red-800);
    }
  }
`;
