import styled from "styled-components";

export const Container = styled.div`
  .location {
    margin-bottom: 20px;
  }
`;

export const Form = styled.form``;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
  input {
    margin: 0 20px;
    border-radius: 3px;
    min-width: 400px;
  }
`;

export const Volumes = styled.div`
  display: flex;
  flex-wrap: wrap;
  > button {
    position: absolute;
    right: 35px;
  }
`;
export const Volume = styled.div`
  margin-right: 20px;
  margin-bottom: 20px;
  h4 {
    text-align: center;
    margin-bottom: 20px;
  }
  button {
    background: gray;
    border: transparent;
    &:hover {
      background: #80808075;
    }
  }
  > div {
    margin: 5px 0;
    label {
      width: 110px;
      display: inline-block;
    }
    input {
      min-width: 100px;
    }
  }
`;
