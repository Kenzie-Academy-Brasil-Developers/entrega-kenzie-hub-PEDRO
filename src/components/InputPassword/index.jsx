import React, { useState } from "react";
import { Button } from "../Button";
import { StyledInputPassword } from "./style";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

export const InputPassword = ({
  label,
  type,
  placeholder,
  register,
  error,
}) => {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <StyledInputPassword>
      {label && <label htmlFor={register.name}>{label}</label>}
      <input
        type={isHidden ? "password" : "text"}
        id={register.name}
        placeholder={placeholder}
        {...register}
      />
      <Button type={"button"} action={() => setIsHidden(!isHidden)}>
        {isHidden ? <MdVisibilityOff /> : <MdVisibility />}
      </Button>
      {error && <p>{error.message}</p>}
    </StyledInputPassword>
  );
};
