import styled from "styled-components";
import imgBackground from "../../assets/Cartoon-Comics-Wallpaper-3D-wallpaper-for-walls-Mural-Kids-Bedroom-Room-Decor-TV-background-wall-covering.jpg";
import imgBanner from "../../assets/baner.jpg";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100%;
  background-image: url(${imgBackground});
  overflow-y: auto;

  > div {
    color: var(--color-hover);
    width: 100%;
    min-height: 300px;
    margin-top: 20px;
    background-image: url(${imgBanner});
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    @media (min-width: 768px) {
      width: 80%;
    }
    h2 {
      font-size: 3rem;
      text-align: center;
      text-shadow: 4px 4px 5px var(--color-secundary);
    }
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-main);
    color: var(--color-hover);
    width: 300px;
    height: auto;
    padding: 7px;
    margin-top: 20px;
    @media (min-width: 768px) {
      width: 80%;
      flex-direction: row;
      justify-content: space-evenly;
    }
    h3 {
      font-size: 2rem;
    }

    select {
      width: 250px;
      height: 35px;
      margin-top: 8px;
      background-color: var(--color-secundary);
      font-weight: 700;
      color: var(--color-red-800);
      border-radius: 6px;
    }
  }

  ul {
    width: 80%;
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-bottom: 40px;
  }
`;
