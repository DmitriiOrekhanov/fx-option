import { useEffect, useState } from "react";
import Select from "react-select";
import { Info } from "../Common/Info";
import { Title } from "../Common/Title";
import classes from "./Instruments.module.scss";

const options = [
  { value: "usd/rub", label: "USD/RUB", main: "USD", secondary: "RUB" },
  { value: "eur/rub", label: "EUR/RUB", main: "EUR", secondary: "RUB" },
  { value: "eur/usd", label: "EUR/USD", main: "EUR", secondary: "USD" },
];
export const Instruments = () => {
  const [mainCurrency, setMainCurrency] = useState("USD");
  const [secondaryCurrency, setSecondaryCurrency] = useState("RUB");
  const [strikeAmount, setStrikeAmount] = useState("");
  const [putAmount, setPutAmount] = useState("");
  const [amountOutput, setAmountOutput] = useState("");

  //ассинхронное получение значения Strike, отключено из-за нерабочего апи
  // const getStrikeValue = async (main, secondary) => {
  //   var myHeaders = new Headers();
  //   myHeaders.append("apikey", "OI3YyWXkBwcYI0a0RS7WeY3QVnhS3c9N");
  //   const options = {
  //     method: "GET",
  //     redirect: "follow",
  //     headers: myHeaders,
  //   };
  //   try {
  //     const response = await fetch(
  //       `https://api.apilayer.com/exchangerates_data/convert?to=${secondary}&from=${main}&amount=1`,
  //       options
  //     );
  //     const json = await response.json();
  //     return json["result"];
  //   } catch (errror) {
  //     console.error(errror);
  //   }
  // };

  // выставление Strike по умолчанию
  // getStrikeValue(mainCurrency, secondaryCurrency).then((cur) =>
  //   setStrikeAmount(cur)
  // );

  const currencyChangeHandler = (currencies) => {
    setMainCurrency(currencies.main);
    setSecondaryCurrency(currencies.secondary);
    console.log(mainCurrency, secondaryCurrency);

    // cмена Strike при смене валютной пары
    // getStrikeValue(mainCurrency, secondaryCurrency).then((cur) =>
    //   setStrikeAmount(cur)
    // );
  };

  useEffect(() => {
    setAmountOutput(strikeAmount * putAmount);
  }, [putAmount, strikeAmount]);

  return (
    <div className={classes.container}>
      <Title title="ИНСТРУМЕНТЫ" />
      <div className={classes.container_content}>
        <Select
          onChange={currencyChangeHandler}
          options={options}
          placeholder="Выберите валютную пару"
          defaultValue={options[0]}
        />
        <form id="strike_form" className={classes.strike_form}>
          <label htmlFor="strike_input" className={classes.strike_label}>
            Strike
          </label>
          <input
            // возможность писать должна быть отключена, но для демонстрации оставим возможность писать свои числа
            // disabled
            id="strike_input"
            className={classes.strike_input}
            placeholder="Strike"
            defaultValue={strikeAmount}
            onInput={(event) => setStrikeAmount(event.target.value)}
          />
        </form>

        <form id="amount-put_form" className={classes["amount-put_form"]}>
          <label id="amount-put_label" className={classes["amount-put_label"]}>
            Amount put
          </label>
          <p className={classes["main-currency"]}>{mainCurrency}</p>
          <input
            id="amount-put_input"
            className={classes["amount-put_input"]}
            placeholder="Amount put"
            defaultValue={putAmount}
            onInput={(event) => setPutAmount(event.target.value)}
          ></input>
        </form>

        <Info
          title="Amount output"
          text={`${secondaryCurrency} ${amountOutput}`}
          className={classes["amount-output"]}
        />
      </div>
    </div>
  );
};
