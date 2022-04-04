import styled from "styled-components";

export const Container = styled.table`
  width: 100%;
  font-size: 1.5rem;
`;

export const Thead = styled.thead`
  background-color: #54d1dba2;
  td {
    padding: 5px 2px;
    text-align: center;
    word-break: keep-all;
  }
`;
export const Tbody = styled.tbody`
  td {
    padding: 5px 0;
  }
`;
export const Tr = styled.tr``;
export const Td = styled.td`
  word-break: break-word;
  text-overflow: ellipsis;
`;
