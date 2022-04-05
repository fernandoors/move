import React, { useEffect } from "react";
import {
  GoogleMap,
  Marker,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";

import * as S from "./Map.styles";

interface MapProps {
  quote: Quote;
}

export default function Map({ quote }: MapProps) {
  const [map, setMap] = React.useState<google.maps.Map>();
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

  useEffect(() => {
    const from_position = quote.location.from_position;
    const to_position = quote.location.to_position;
    if (from_position && to_position) {
      setOrigin({
        lat: parseFloat(from_position.lat),
        lng: parseFloat(from_position.lng),
      });
      setDestination({
        lat: parseFloat(to_position.lat),
        lng: parseFloat(to_position.lng),
      });
    }
  }, [quote.location.from_position, quote.location.to_position]);

  const directionsServiceOptions =
    // @ts-ignore
    React.useMemo<google.maps.DirectionsRequest>(() => {
      return {
        origin,
        destination,
        travelMode: "DRIVING",
      };
    }, [origin, destination]);

  const directionsCallback = React.useCallback((res) => {
    if (res !== null && res.status === "OK") {
      setResponse(res);
    }
  }, []);

  const directionsRendererOptions = React.useMemo<any>(() => {
    return {
      directions: response,
    };
  }, [response]);

  return (
    <S.Container style={{ height: "40vh", width: "95vw" }}>
      <GoogleMap
        onLoad={onMapLoad}
        mapContainerStyle={{ width: "94vw", height: "40vh" }}
        center={position}
        zoom={10}
      >
        {!response && !!quote.location.from_position && (
          <Marker
            position={{
              lat: parseFloat(quote.location.from_position.lat),
              lng: parseFloat(quote.location.from_position.lng),
            }}
          />
        )}
        {!response && !!quote.location.to_position.lat && (
          <Marker
            position={{
              lat: parseFloat(quote.location.to_position.lat),
              lng: parseFloat(quote.location.to_position.lng),
            }}
          />
        )}

        {origin && destination && (
          <DirectionsService
            options={directionsServiceOptions}
            callback={directionsCallback}
          />
        )}

        {response && directionsRendererOptions && (
          <DirectionsRenderer options={directionsRendererOptions} />
        )}
      </GoogleMap>
    </S.Container>
  );
}
