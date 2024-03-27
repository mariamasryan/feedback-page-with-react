import "./style.scss";

export const InputField = ({type, placeholder, value, onChange, reff }) => {
    return (
      <input
        ref={reff}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    );
  };
  