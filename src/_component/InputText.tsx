interface InputTextProp {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputText: React.FC<InputTextProp> = ({ value, onChange, onSubmit }) => {
  return (
    <div>
      <input
        onSubmit={onSubmit}
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter text or numbers"
      />
    </div>
  );
};

export default InputText;
