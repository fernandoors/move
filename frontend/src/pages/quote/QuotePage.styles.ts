import styled from "styled-components";

export const Container = styled.main`
  font-size: 2rem;

  a {
    color: black;
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
  input {
    box-sizing: border-box;
    border: 1px solid transparent;
    height: 32px;
    padding: 0 12px;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    font-size: 14px;
    outline: none;
    text-overflow: ellipses;
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
  > h4 {
    text-align: center;
    color: red;
    cursor: pointer;
  }
  > a {
  }
  button {
    margin-right: 20px;
  }
`;
