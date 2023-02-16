export const Input = ({ id, label, type, placeholder, register, error }) => {
  return (
    <fieldset>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} {...register(id)} />
      {error ? <p>{error}</p> : null}
    </fieldset>
  );
};
