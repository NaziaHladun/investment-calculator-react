import Input from "./Input";

export default function InputGroup({ inputNumber, handleChange }) {
  return (
    <>
      <div className="input-group">
        <Input
          labelName="Initial investment"
          inputName="initialInvestment"
          value={inputNumber["initialInvestment"]}
          handleChange={handleChange}
        />
        <Input
          labelName="Annual investment"
          inputName="annualInvestment"
          value={inputNumber["annualInvestment"]}
          handleChange={handleChange}
        />
      </div>
      <div className="input-group">
        <Input
          labelName="Expected return"
          inputName="expectedReturn"
          value={inputNumber["expectedReturn"]}
          handleChange={handleChange}
        />
        <Input
          labelName="Duration"
          inputName="duration"
          value={inputNumber["duration"]}
          handleChange={handleChange}
        />
      </div>
    </>
  );
}
