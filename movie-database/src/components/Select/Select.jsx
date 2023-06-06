const Select = ({ label, value, options, onChange }) => {
  return (
    <label htmlFor={value}>
      {label}
      <select name={value} value={value} onChange={onChange}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Select;
