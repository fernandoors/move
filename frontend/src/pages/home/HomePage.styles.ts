import styled from "styled-components";

export const Container = styled.section`
  padding: 2rem 0;
`;

export const Row = styled.div`
  padding: 0 2rem;
  > h2 {
    font-size: 3rem;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const List = styled.div`
  > h3 {
    font-size: 2.3rem;
    margin-bottom: 20px;
  }
  > a {
    text-decoration: none;
    font-size: 1.5rem;
  }
  margin: 2rem;
`;
