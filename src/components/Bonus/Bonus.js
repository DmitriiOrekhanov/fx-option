import { Title } from "../Common/Title";
import Select from "react-select";
import classes from "./Bonus.module.scss";
import { useState } from "react";

const currencyOptions = [
  { value: "RUB", label: "RUB" },
  { value: "USD", label: "USD" },
  { value: "EUR", label: "EUR" },
];
const bonusOptions = [
  { value: "TOD", label: "TOD", days: 0 },
  { value: "TOM", label: "TOM", days: 1 },
  { value: "SPT", label: "SPT", days: 2 },
];
export const Bonus = () => {
  const [bonusCurrency, setBonusCurrency] = useState("RUB");
  const [bonusAmount, setBonusAmount] = useState(1);

  const bonusCurrencyHandler = (currency) => {
    setBonusCurrency(currency.label);
  };

  return (
    <div className={classes.container}>
      <Title title="ПРЕМИЯ" />
      <div className={classes.container_content}>
        <form id="bonus_form" className={classes.bonus_form}>
          <Select
            onChange={bonusCurrencyHandler}
            options={currencyOptions}
            className={classes.bonus_select}
            defaultValue={currencyOptions[0]}
          />
          <input
            type="number"
            min={1}
            className={classes.bonus_input}
            placeholder="Сумма премии"
            onSubmit={(event) => {
              setBonusAmount(event.target.values);
            }}
          />
        </form>
        <Select
          options={bonusOptions}
          className={classes.bonus_type}
          placeholder="Выберите дату премии"
        />
      </div>
    </div>
  );
};
