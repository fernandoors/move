import { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";

import api from "../../service/api";
import quoteSchema from "../../helpers/quoteSchema";

import * as S from "./QuotePage.styles";
import QuoteForm from "../../components/QuoteForm/QuoteForm";
import Button from "../../components/Button/Button";
import quoteIsValid from "../../helpers/quoteIsValid";

export default function QuotePage() {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const [quote, setQuote] = useState<Quote>(quoteSchema);
  const [quoteLoading, setQuoteLoading] = useState(false);
  const [quoteIsInvalid, setQuoteIsInvalid] = useState(false);

  useEffect(() => {
    async function requestQuote() {
      const { data } = await api.get<Quote>(`/quote/${id}`);
      setQuote(data);
      setQuoteLoading(false);
    }
    if (id !== "new") {
      setQuoteLoading(true);
      requestQuote();
    }
  }, [id]);

  function handleSave() {
    const isNew = id === "new";
    const method = isNew ? "post" : "put";
    const isValid = quoteIsValid(quote);
    if (isValid) {
      api[method](`/quote/` + (isNew ? "" : id), { ...quote }).then(() => {
        history.push("/");
      });
    } else {
      setQuoteIsInvalid(true);
    }
  }

  const onChange = (key: string, value: string) => {
    setQuote((prev) => ({ ...prev, [key]: value }));
  };

  const onUserChange = (key: string, value: string) => {
    setQuote((prev) => ({ ...prev, user: { ...prev.user, [key]: value } }));
  };

  const onLocationChange = (key: string, value: string) => {
    setQuote((prev) => ({
      ...prev,
      location: { ...prev.location, [key]: value },
    }));
  };

  const onVolumeChange = (index: number, key: string, value: any) => {
    setQuote((prev) => ({
      ...prev,
      volumes: prev.volumes.map((volume, i) => {
        return i === index ? { ...volume, [key]: value } : { ...volume };
      }),
    }));
  };

  const onAddVolume = () => {
    setQuote((prev) => ({
      ...prev,
      volumes: [
        ...prev.volumes,
        { description: "", weight: "", length: "", width: "" },
      ],
    }));
  };

  const onRemoveVolume = (index: number) => {
    setQuote((prev) => ({
      ...prev,
      volumes: prev.volumes.filter((v, i) => i !== index),
    }));
  };

  return (
    <>
      {!quoteLoading ? (
        <>
          <S.Container>
            <S.Row>
              <Link to="/">{"<"}</Link>
              {quoteIsInvalid && (
                <h4
                  onClick={() => {
                    setQuoteIsInvalid(false);
                  }}
                >
                  Quote Is Invalid
                </h4>
              )}
              <Button onClick={handleSave}>Save</Button>
            </S.Row>
            <h3 style={{ textAlign: "center" }}>
              {id === "new" ? "Create" : "Edit"} Quote
            </h3>
            <S.Content>
              <QuoteForm
                quote={quote}
                onChange={onChange}
                onUserChange={onUserChange}
                onLocationChange={onLocationChange}
                onVolumeChange={onVolumeChange}
                onAddVolume={onAddVolume}
                onRemoveVolume={onRemoveVolume}
              />
            </S.Content>
          </S.Container>
        </>
      ) : (
        "Loading"
      )}
    </>
  );
}
