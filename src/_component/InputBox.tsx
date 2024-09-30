import React from "react";
import InputText from "./InputText";
interface InputBoxProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputBox: React.FC<InputBoxProps> = ({ value, onChange, onSubmit }) => {
  return (
    <div>
      <InputText onSubmit={onSubmit} value={value} onChange={onChange} />
    </div>
  );
};

export default InputBox;
