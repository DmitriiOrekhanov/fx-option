import { Option } from "./components/Option/Option";
import { Sides } from "./components/Sides/Sides";
import { Bonus } from "./components/Bonus/Bonus";
import { Instruments } from "./components/Instruments/Instruments";

import classes from "./App.module.scss";
import { Terms } from "./components/Terms/Terms";
const sidesOptions = [
  { value: "123456789", label: "123456789" },
  { value: "987654321", label: "987654321" },
  { value: "00000000", label: "00000000" },
];
function App() {
  return (
    <div className={classes.App}>
      <Sides options={sidesOptions} />
      <Option />
      <Instruments />
      <Bonus />
      <Terms />
    </div>
  );
}

export default App;
