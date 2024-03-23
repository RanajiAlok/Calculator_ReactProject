import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <>
      <h1 className={styles.heading}>Calculator</h1>
      <div className={styles.mainBody}>
        <div className={styles.calculator}>
          <Display displayValue={calVal}></Display>
          <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
        </div>
      </div>
    </>
  );
}

export default App;
