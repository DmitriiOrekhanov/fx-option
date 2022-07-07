import Select from "react-select";
import { Info } from "../Common/Info";
import { Title } from "../Common/Title";
import classes from "./Option.module.scss";
import { OptionButton } from "./OptionButton/OptionButton";

export const Option = (props) => {
  return (
    <div className={classes.container}>
      <Title title="ОПЦИОНЫ" />
      <div className={classes.wrapper}>
        <div className={classes.container_content}>
          <OptionButton
            title="Направления"
            text1="We Buy"
            text2="We Sell"
            type="direction"
          />
          <OptionButton
            title="Тип"
            text1="Call"
            text2="Put"
            type="option-mode"
          />
          <OptionButton
            title="Стиль"
            text1="European"
            text2="American"
            type="style"
          />
        </div>
        <div className={classes.container_content}>
          <Select />
          <Info title="Бизнес-центры" text="RUS/ModFol" />
        </div>
      </div>
    </div>
  );
};
