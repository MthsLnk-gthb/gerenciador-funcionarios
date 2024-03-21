const Input = ({inputLabel, inputType, placeholderText, inputValue, inputSetter}) => {
  return (
    <section>
      <label>{inputLabel}</label>
      <input
        type={inputType}
        placeholder={placeholderText}
        value={inputValue}
        onChange={(e) => inputSetter(e.target.value)}
      />
    </section>
  );
}

export default Input