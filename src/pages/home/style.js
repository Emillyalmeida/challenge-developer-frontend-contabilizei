import styled from "styled-components";
import imgBackground from "../../assets/Cartoon-Comics-Wallpaper-3D-wallpaper-for-walls-Mural-Kids-Bedroom-Room-Decor-TV-background-wall-covering.jpg";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100%;
  background-image: url(${imgBackground});
  overflow-y: auto;

  div {
    background-color: var(--color-secundary);
    color: var(--color-main);
    width: 100%;
    height: 300px;
    margin-top: 20px;
    @media (min-width: 768px) {
      width: 80%;
    }
  }

  section {
    background-color: var(--color-secundary);
    color: var(--color-main);
    width: 100%;
    height: 300px;
    margin-top: 20px;
    @media (min-width: 768px) {
      width: 80%;
    }
  }

  ul {
    width: 80%;
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;
