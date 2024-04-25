import { FC } from "react";
import "./index.css";

interface InputType {
  text: string;
  placeholder: string;
}

const Input: FC<InputType> = (props) => {
  return (
    <div className="input-wrapper">
      <label className="label_input" htmlFor={props.text}>{props.placeholder}</label>
      <input id={props.text} type="text" placeholder={props.placeholder} />
    </div>
  );
};

export default Input;
