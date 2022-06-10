import styled from "styled-components";

export const CardLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 280px;
  height: 400px;
  margin: 10px;
  background-color: var(--color-hover);
  color: var(--color-main);
  cursor: pointer;
  position: relative;
  transition: 0.3s;
  box-shadow: 0 7px 8px 0 rgba(0, 0, 0, 0.6), 0 8px 24px 0 rgba(0, 0, 0, 0.4);

  &:hover {
    transform: translate(0, -8px);
    box-shadow: 0 7px 8px 0 rgba(0, 0, 0, 0.8), 0 8px 24px 0 rgba(0, 0, 0, 0.5);
    color: var(--color-red-800);
  }

  div {
    position: absolute;
    top: 230px;
    left: 210px;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--color-red-800);
    color: var(--color-hover);
    box-shadow: 0 7px 8px 0 rgba(0, 0, 0, 0.6), 0 8px 24px 0 rgba(0, 0, 0, 0.4);
    > span {
      font-size: 1.2rem;
      font-weight: 700;
      text-transform: uppercase;
    }
  }

  img {
    width: 100%;
    height: 290px;
  }

  h3 {
    text-align: center;
    font-size: 1rem;
  }
  button {
    color: var(--color-secundary);
    background-color: var(--color-main);
    cursor: pointer;
    height: 40px;
    font-size: 1.25rem;
    width: 100%;

    &:hover {
      background-color: var(--color-red-800);
    }
  }
`;
