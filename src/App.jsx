import { useState } from "react";
import InputGroup from "./components/InputGroup";
import Result from "./components/Result";

function App() {
  const [inputNumber, setInputNumber] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setInputNumber((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  return (
    <main>
      <div id="user-input">
        <InputGroup inputNumber={inputNumber} handleChange={handleChange} />
      </div>
      <Result inputNumber={inputNumber} />
    </main>
  );
}

export default App;
