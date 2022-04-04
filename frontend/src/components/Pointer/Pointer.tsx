import * as S from "./Pointer.styles";

interface PointerProps {
  lat: string;
  lng: string;
  text: string;
}

export default function Pointer({ text }: PointerProps) {
  return <S.Container>{text}</S.Container>;
}
