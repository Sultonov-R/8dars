import { FC } from "react";
import Input from "../Input";
import "./index.css";

interface Input {
  value:string
}


const InputText:FC<Input>=()=> {
  return (
    <div className="wrapper">
      <div>
        <span>
          <img width={20} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsB8HM8jAceDhu3oLLuvumHRJ8obiQUOIswXYWIEGTUA&s" alt="menu icon" />
        </span>
      </div>
      <div className="input-group">
        <Input text="inputLabel" placeholder="Ustun nomi" />
        <Input text="inputLabel" placeholder="Key" />
      </div>
    </div>
  );
}

export default InputText;
