export default function Input({ labelName, inputName, handleChange, value }) {
  return (
    <span>
      <label>{labelName}</label>
      <input
        type="number"
        name={inputName}
        value={value || null}
        onChange={handleChange}
      ></input>
    </span>
  );
}
