import styled from "styled-components";

export const Container = styled.button`
  *,
  & {
    cursor: pointer;
  }
  border-radius: 7px;
  background-color: #54d1db;
  border-color: #54d1db;
  color: #ffffff;
  font-size: medium;
  padding: 5px 10px;
  width: fit-content;
  height: fit-content;

  &:hover {
    background-color: #54d1dba3;
    transition: 0.5s;
  }
`;
