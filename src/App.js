import { Option } from "./components/Option/Option";
import { Sides } from "./components/Sides/Sides";
import { Bonus } from "./components/Bonus/Bonus";
import { Instruments } from "./components/Instruments/Instruments";

import classes from "./App.module.scss";
import { Terms } from "./components/Terms/Terms";
function App() {
  return (
    <div className={classes.App}>
      <Sides />
      <Option />
      <Instruments />
      <Bonus />
      <Terms />
    </div>
  );
}

export default App;
