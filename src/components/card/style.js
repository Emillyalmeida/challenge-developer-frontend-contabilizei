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
  transition: 0.3s;
  box-shadow: 0 7px 8px 0 rgba(0, 0, 0, 0.6), 0 8px 24px 0 rgba(0, 0, 0, 0.4);

  &:hover {
    transform: translate(0, -8px);
    box-shadow: 0 7px 8px 0 rgba(0, 0, 0, 0.8), 0 8px 24px 0 rgba(0, 0, 0, 0.5);
    color: var(--color-red-800);
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
