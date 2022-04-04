import GoogleMapReact from "google-map-react";
import Pointer from "../Pointer/Pointer";

import * as S from "./Map.styles";

interface MapProps {
  quote: Quote;
}

const defaultProps = {
  center: {
    lat: 45.5444167,
    lng: -73.6518647,
  },
  zoom: 10,
};

export default function Map({ quote }: MapProps) {
  return (
    <S.Container style={{ height: "40vh", width: "95vw" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyCw7b0WS87vR4zTJztHhFdxaO9UldWpT_8",
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {!!quote.location.from_address && (
          <Pointer
            text={"A"}
            lat={quote.location.from_position.lat}
            lng={quote.location.from_position.lng}
          />
        )}
        {!!quote.location.to_address && (
          <Pointer
            text={"B"}
            lat={quote.location.to_position.lat}
            lng={quote.location.to_position.lng}
          />
        )}
      </GoogleMapReact>
    </S.Container>
  );
}
