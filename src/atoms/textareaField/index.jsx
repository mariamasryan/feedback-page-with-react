export const TextareaField = ({ value, onChange, placeholder, required, reff }) => {
  return (
    <textarea
      ref={reff}
      placeholder={placeholder}
      value={value}
      required={required}
      onChange={onChange}
    />
  );
};


