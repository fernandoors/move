import React from "react";
import { StandaloneSearchBox } from "@react-google-maps/api";

import * as S from "./AddressForm.styles";
import Button from "../Button/Button";

interface AddressFormProps {
  quote: Quote;
  onLocationChange: (key: string, value: any) => void;
}

export default function AddressForm({
  quote,
  onLocationChange,
}: AddressFormProps) {
  const [map, setMap] = React.useState<google.maps.Map>();
  const [searchBoxA, setSearchBoxA] =
    React.useState<google.maps.places.SearchBox>();
  const [searchBoxB, setSearchBoxB] =
    React.useState<google.maps.places.SearchBox>();
  const [pointA, setPointA] = React.useState<google.maps.LatLngLiteral>();
  const [pointB, setPointB] = React.useState<google.maps.LatLngLiteral>();

  const [origin, setOrigin] = React.useState<google.maps.LatLngLiteral | null>(
    null
  );

  const [destination, setDestination] =
    React.useState<google.maps.LatLngLiteral | null>(null);

  const [response, setResponse] =
    React.useState<google.maps.DistanceMatrixResponse | null>(null);

  const position = {
    lat: 45.5444167,
    lng: -73.6518647,
  };

  const onMapLoad = (map: google.maps.Map) => {
    setMap(map);
  };

  const onLoadA = (ref: google.maps.places.SearchBox) => {
    setSearchBoxA(ref);
  };

  const onLoadB = (ref: google.maps.places.SearchBox) => {
    setSearchBoxB(ref);
  };

  const onPlacesChangedA = () => {
    const places = searchBoxA!.getPlaces();
    const place = places![0];
    if (!!place) {
      const location = {
        lat: place?.geometry?.location?.lat() || 0,
        lng: place?.geometry?.location?.lng() || 0,
      };
      onLocationChange("from_position", location);
      onLocationChange("from_address", place.formatted_address);
      setPointA(location);
      setOrigin(null);
      setDestination(null);
      setResponse(null);
      map?.panTo(location);
    }
  };

  const onPlacesChangedB = () => {
    const places = searchBoxB!.getPlaces();
    const place = places![0];
    if (!!place) {
      const location = {
        lat: place?.geometry?.location?.lat() || 0,
        lng: place?.geometry?.location?.lng() || 0,
      };
      onLocationChange("to_position", location);
      onLocationChange("to_address", place.formatted_address);
      setPointB(location);
      setOrigin(null);
      setDestination(null);
      setResponse(null);
      map?.panTo(location);
    }
  };

  const traceRoute = () => {
    if (pointA && pointB) {
      setOrigin(pointA);
      setDestination(pointB);
    }
  };

  return (
    <S.Container>
      <div className="address">
        <StandaloneSearchBox
          onLoad={onLoadA}
          onPlacesChanged={onPlacesChangedA}
        >
          <S.Row>
            <label htmlFor="from_address">From:</label>
            <input
              id="from_address"
              className="addressField"
              onChange={(e) => {
                onLocationChange("from_address", e.target.value);
              }}
              placeholder="From Address"
              value={quote.location.from_address}
            />
          </S.Row>
        </StandaloneSearchBox>
        <StandaloneSearchBox
          onLoad={onLoadB}
          onPlacesChanged={onPlacesChangedB}
        >
          <S.Row>
            <label htmlFor="to_address">To:</label>
            <input
              id="to_address"
              className="addressField"
              onChange={(e) => {
                onLocationChange("to_address", e.target.value);
              }}
              placeholder="To Address"
              value={quote.location.to_address}
            />
            <Button onClick={traceRoute}>Route</Button>
          </S.Row>
        </StandaloneSearchBox>
      </div>
    </S.Container>
  );
}
