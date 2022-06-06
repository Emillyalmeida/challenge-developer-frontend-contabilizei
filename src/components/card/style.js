import styled from "styled-components";

export const CardLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 280px;
  height: 350px;
  margin: 10px;
  background-color: var(--color-hover);
  color: var(--color-main);

  img {
    width: 100%;
    height: 295px;
  }

  h3 {
    text-align: center;
  }
`;
