import { React } from "react";
import Select from "react-select";
import { Info } from "../Common/Info";

import { Title } from "../Common/Title";

import classes from "./Sides.module.scss";

export const Sides = (props) => {
  return (
    <div className={classes.container}>
      <Title title="СТОРОНЫ" />
      <div className={classes.container_content}>
        <Select options={props.options} placeholder="Выберите Счёт" />
        <Info title="CSA" text="RUB" />
        <Info title="Контрагент" text="MOEX" />
        <Info title="Режим Торгов" text="TEST" />
      </div>
    </div>
  );
};
