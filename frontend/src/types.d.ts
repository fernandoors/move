declare module "google-map-react";
interface Quote {
  _id?: string;
  status: string;
  date_to_move: Date | string;
  user: User;
  location: ILocation;
  volumes: Volumes[];
}

interface User {
  name: string;
  email: string;
}

interface ILocation {
  from_address: string;
  from_position: Position;
  to_address: string;
  to_position: Position;
}

interface Position {
  lat: string;
  lng: string;
}

interface Volumes {
  description: string;
  weight: string;
  length: string;
  width: string;
}

type Libraries = (
  | "drawing"
  | "geometry"
  | "localContext"
  | "places"
  | "visualization"
)[];
