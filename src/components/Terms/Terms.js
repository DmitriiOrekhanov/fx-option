import classes from "./Terms.module.scss";
import { Title } from "../Common/Title";
import Select from "react-select";

const bonusOptions = [
  { value: "TOD", label: "TOD", days: 0 },
  { value: "TOM", label: "TOM", days: 1 },
  { value: "SPT", label: "SPT", days: 2 },
];

export const Terms = () => {
  return (
    <div className={classes.container}>
      <Title title="УСЛОВИЯ РАССЧЁТОВ" />
      <div className={classes.container_content}>
        <form>
          <input
            type="radio"
            id="assetless"
            className={classes.assetless}
            name="type"
          />
          <label htmlFor="assetless">Расчётный</label>

          <input
            type="radio"
            id="asset"
            className={classes.asset}
            name="type"
          />
          <label htmlFor="asset">Поставочный</label>
        </form>
        <Select
          options={bonusOptions}
          className={classes["deal-date"]}
          placeholder="Выберите дату рассчётов"
        />
      </div>
    </div>
  );
};
