import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Table, { TableDataProps } from "../../components/Table/Table";
import api from "../../service/api";
import * as S from "./HomePage.styles";

export default function HomePage() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [quotesTable, setQuotesTable] = useState<TableDataProps[][]>([]);

  useEffect(() => {
    async function requestQuotes() {
      const { data } = await api.get<Quote[]>("/quote");
      const sortedData = data.sort((a, b) =>
        new Date(a.date_to_move + " ") < new Date(b.date_to_move + " ") ? 1 : -1
      );
      setQuotes(sortedData);
      const quoteTabled = sortedData.map((quote) => [
        { label: <Link to={`/quote/${quote._id}`}>{quote.date_to_move}</Link> },
        { label: quote.location.from_address },
        { label: quote.location.to_address },
        { label: quote.volumes.length.toString() },
      ]);
      setQuotesTable(quoteTabled);
    }
    requestQuotes();
  }, []);

  return (
    <S.Container>
      <S.Row>
        <h2>App Quotes</h2>
        <Link to="/quote/new">
          <Button>Create Quote</Button>
        </Link>
      </S.Row>
      <S.List>
        <h3>Last Quotes</h3>
        {!!quotes.length ? (
          <Table data={quotesTable} head={["Date", "From", "To", "Volumes"]} />
        ) : (
          "Loading"
        )}
      </S.List>
    </S.Container>
  );
}
