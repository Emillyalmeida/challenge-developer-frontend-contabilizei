import styled from "styled-components";

export const LogoHeader = styled.header`
  background-color: var(--color-main);
  color: var(--color-secundary);
  height: 10vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
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
    flex-direction: row;
    width: 80%;
    padding: 20px;
  }
`;
