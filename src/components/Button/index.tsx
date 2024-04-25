import { FC } from "react";
import "./index.css";

interface ButtonProps {
  click: () => void;
}

const Button:FC<ButtonProps> = (props) => {
  return (
    <div onClick={props.click} className="button-add">
      <div className="plus">
        <span>+</span>
      </div>
      <span>Ustun qo'shish</span>
    </div>
  );
};

export default Button;
