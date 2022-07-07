import { useState } from "react";
import classes from "./OptionButton.module.scss";

export const OptionButton = (props) => {
  const [option1, setOption1] = useState(true);
  const [option2, setOption2] = useState(false);

  const handleOptionChange = () => {
    setOption1(!option1);
    setOption2(!option2);
    console.log(option1);
  };
  return (
    <div>
      <p className={classes.title}>{props.title}</p>
      <div>
        <button
          className={`${classes.button} ${option1 ? classes.active : ""} ${
            classes[props.type]
          }`}
          onClick={handleOptionChange}
        >
          {props.text1}
        </button>
        <button
          className={`${classes.button} ${option2 ? classes.active : ""} ${
            classes[props.type]
          }`}
          onClick={handleOptionChange}
        >
          {props.text2}
        </button>
      </div>
    </div>
  );
};
