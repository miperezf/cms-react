import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick?: () => void;
};

const Button = ({ children, onClick }: Props) => {
  return (
    <button
      type={`${children === "Enviar" ? "submit" : "reset"}`}
      className={`btn btn-${children === "Enviar" ? "primary" : "secondary"}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
