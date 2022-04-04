import styled from "styled-components";

export const Container = styled.main`
  font-size: 2rem;
  a {
    color: black;
    top: 10px;
    padding: 0px 6px;
    margin: 2rem;
    border: 1px solid;
    position: relative;
    border-radius: 50%;
    &:hover {
      background-color: #ff9800ba;
      box-shadow: 0px 0px 2rem 1.5px #ff9800ba;
    }
  }
`;

export const Content = styled.main`
  display: flex;
  align-items: center;
  margin-top: 30px;
  padding: 0 30px;
  font-size: 1.5rem;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > a {
  }
  button {
    margin-right: 20px;
  }
`;
