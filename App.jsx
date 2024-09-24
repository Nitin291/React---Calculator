import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  let [calVal, setCalVal] = useState("");
  const onButtonClicked = (event) => {
    const buttonValue = event.target.innerText;

    if (buttonValue === "C") {
      setCalVal(""); // Issue: Incorrect assignment
    } else if (buttonValue === "=") {
      const result = eval(calVal);
      setCalVal(result); // Correct: Updating state with result
    } else {
      const newDisplayValue = calVal + buttonValue;
      setCalVal(newDisplayValue); // Correct: Updating state with new value
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonsContainer onButtonsClicked={onButtonClicked}></ButtonsContainer>
    </div>
  );
}

export default App;
