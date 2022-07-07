import { React } from "react";
import Select from "react-select";
import { Info } from "../Common/Info";

import { Title } from "../Common/Title";

import classes from "./Sides.module.scss";

const options = [
  { value: "123456789", label: "123456789" },
  { value: "987654321", label: "987654321" },
  { value: "00000000", label: "00000000" },
];

export const Sides = () => {
  return (
    <div className={classes.container}>
      <Title title="СТОРОНЫ" />
      <div className={classes.container_content}>
        <Select
          options={options}
          defaultValue={options[0]}
          placeholder="Выберите Счёт"
        />
        <Info title="CSA" text="RUB" />
        <Info title="Контрагент" text="MOEX" />
        <Info title="Режим Торгов" text="TEST" />
      </div>
    </div>
  );
};
