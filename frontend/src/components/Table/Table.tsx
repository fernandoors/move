import { v4 as uuidv4 } from "uuid";
import * as S from "./Table.styles";

export interface TableDataProps {
  label: React.ReactNode;
}
interface TableProps {
  head: string[];
  data: TableDataProps[][];
}

export default function Table({ head, data }: TableProps) {
  return (
    <S.Container>
      <S.Thead>
        <S.Tr>
          {head.map((h, key) => (
            <S.Td key={key}>{h}</S.Td>
          ))}
        </S.Tr>
      </S.Thead>
      <S.Tbody>
        {data.map((row) => (
          <S.Tr key={uuidv4()}>
            {row.map(({ label }) => (
              <S.Td key={uuidv4()}>{label}</S.Td>
            ))}
          </S.Tr>
        ))}
      </S.Tbody>
    </S.Container>
  );
}
