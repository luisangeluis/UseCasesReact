import { useState } from 'react';
import MyInput from '../atoms/MyInput';

const MyForm = () => {
  // console.log(onChange);

  const [inputs, setInputs] = useState([
    {
      label: 'name',
      name: 'name',
      type: 'text',
      defaultValue: 'luis',
      onChange: onChange,
    },
  ]);

  function onChange(e) {
    console.log(e.target.value);
  }

  console.log(inputs[0].onChange);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  return (
    <form onSubmit={onSubmit}>
      {inputs.map((input, i) => {
        return (
          <MyInput
            label={input.label}
            name={input.name}
            type={input.type}
            defaultValue={input.defaultValue}
            onChange={input.onChange}
            key={i}
          />
        );
      })}
      <input type="submit" value="submit"></input>
    </form>
  );
};

export default MyForm;
