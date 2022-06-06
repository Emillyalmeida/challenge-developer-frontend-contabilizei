import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: var(--color-main);
  color: var(--color-secundary);
  height: 10vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;

  h1 {
    font-size: 2rem;
    color: var(--color-secundary);
    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }

  nav {
    display: flex;
    justify-content: space-between;
    width: 100px;
    @media (min-width: 768px) {
      width: 25%;
    }

    div {
      display: flex;
      align-items: center;
      color: var(--color-secundary);
      &:hover {
        color: var(--color-hover);
        cursor: pointer;
      }

      span {
        display: none;
        @media (min-width: 768px) {
          font-size: 1.5rem;
          padding-right: 10px;
          margin-top: 4px;
          display: flex;
        }
      }

      svg {
        height: 2.5rem;
        width: 2.5rem;
      }
    }
  }
`;
