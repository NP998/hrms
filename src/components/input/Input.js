import React, { Fragment } from "react";

const defaultClasses = {
  inputClassName: "",
  labelClassName: "",
  iconClassName: "",
  inputComponentClass: "",
  inputIconContainer: "",
  inputerror:""
};

const Input = ({
  type = "text",
  value,
  name,
  label,
  id,
  icon,
  classes={...defaultClasses},
  placeholder,
  onChange,
  onFocus=()=>{},
  onBlur=()=>{},
  errors
}) => {
  const {
    inputClassName,
    labelClassName,
    iconClassName,
    inputComponentClass,
    inputIconContainer,
    inputerror,
  } = classes;
  return (
    <Fragment>
    <div className={`input-component ${inputComponentClass}`}>
      {label && <label className={`label ${labelClassName}`}>{label}</label>}
      <div className={`input-icon-container ${inputIconContainer}`}>
        <input
          id={id}
          onChange={onChange}
          className={`input ${inputClassName}`}
          placeholder={placeholder}
          type={type}
          value={value}
          name={name}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {icon}
      </div>
    </div>
      {errors && <p className={`input-error ${inputerror}`}>{errors}</p>}
      </Fragment>
  );
};

export default Input;