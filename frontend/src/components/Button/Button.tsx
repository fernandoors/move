import React from "react";
import * as S from "./Button.styles";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({ children, ...rest }: ButtonProps) {
  return <S.Container {...rest}>{children}</S.Container>;
}
