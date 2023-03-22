const MyInput = ({ label, name, type, defaultValue, onChange }) => {
  // console.log(label);

  // console.log(onChange);

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type={type} defaultValue={defaultValue} onChange={onChange} />
    </div>
  );
};

export default MyInput;
