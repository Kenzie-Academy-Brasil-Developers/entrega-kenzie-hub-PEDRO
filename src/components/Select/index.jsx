import { StyledSelect } from "./style";

export const Select = ({ children, register, label, error }) => {
  return (
    <StyledSelect>
      {label && <label htmlFor={register.name}>{label}</label>}
      <select name="" id="" {...register}>
        {children}
      </select>
      {error && <p>{error.message}</p>}
    </StyledSelect>
  );
};
