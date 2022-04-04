import Button from "../Button/Button";
import Map from "../Map/Map";

import * as S from "./QuoteForm.styles";

interface QuoteFormProps {
  quote: Quote;
  onChange: (key: string, value: string) => void;
  onAddVolume: () => void;
  onRemoveVolume: (index: number) => void;
  onUserChange: (key: string, value: string) => void;
  onLocationChange: (key: string, value: string) => void;
  onVolumeChange: (index: number, key: string, value: string) => void;
}

export default function QuoteForm(props: QuoteFormProps) {
  const {
    quote,
    onChange,
    onUserChange,
    onLocationChange,
    onVolumeChange,
    onAddVolume,
    onRemoveVolume,
  } = props;
  function handleStopSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <S.Container>
      <S.Form onSubmit={handleStopSubmit}>
        <S.Row className="user">
          <div>
            <label htmlFor="user_name">Your Full Name:</label>
            <input
              id="user_name"
              value={quote.user.name}
              onChange={(e) => onUserChange("name", e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Your Email:</label>
            <input
              type="email"
              id="email"
              value={quote.user.email}
              onChange={(e) => onUserChange("email", e.target.value)}
            />
          </div>
        </S.Row>
        <S.Row className="date" style={{ justifyContent: "flex-start" }}>
          <label htmlFor="date_to_move">Date To Move:</label>
          <input
            type="date"
            id="date_to_move"
            style={{ marginLeft: 29 }}
            pattern="[\d]{4}-[\d]{2}-[\d]{2} "
            min={new Date().toISOString().split("T")[0]}
            value={quote.date_to_move as string}
            onChange={(e) => onChange("date_to_move", e.target.value)}
          />
        </S.Row>
        <S.Row className="location">
          <Map quote={quote} />
        </S.Row>
        <S.Volumes className="volumes">
          <Button onClick={onAddVolume}>+</Button>
          {quote.volumes.map((volume, index) => (
            <S.Volume key={index}>
              <S.Row>
                <h4>Volume {index + 1}</h4>
                {quote.volumes.length > 1 && (
                  <Button
                    onClick={() => {
                      onRemoveVolume(index);
                    }}
                  >
                    -
                  </Button>
                )}
              </S.Row>
              <div>
                <label htmlFor="description">Description:</label>
                <input
                  id="description"
                  value={volume.description}
                  onChange={(e) =>
                    onVolumeChange(index, "description", e.target.value)
                  }
                />
              </div>
              <div>
                <label htmlFor="weight">Weight:</label>
                <input
                  id="weight"
                  placeholder="10 kg"
                  value={volume.weight}
                  onChange={(e) =>
                    onVolumeChange(index, "weight", e.target.value)
                  }
                />
              </div>
              <div>
                <label htmlFor="length">Length:</label>
                <input
                  id="length"
                  placeholder="1.5 m"
                  value={volume.length}
                  onChange={(e) =>
                    onVolumeChange(index, "length", e.target.value)
                  }
                />
              </div>
              <div>
                <label htmlFor="width">Width:</label>
                <input
                  id="width"
                  placeholder="1.5 m"
                  value={volume.width}
                  onChange={(e) =>
                    onVolumeChange(index, "width", e.target.value)
                  }
                />
              </div>
            </S.Volume>
          ))}
        </S.Volumes>
      </S.Form>
    </S.Container>
  );
}
