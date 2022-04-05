import styled from "styled-components";

export const Container = styled.div`
  .address {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  input {
    width: 300px;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  label {
    width: 60px;
    display: inline-block;
  }
  button {
    margin-left: 20px;
  }
`;
