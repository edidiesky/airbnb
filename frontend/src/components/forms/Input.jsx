import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { CgDanger } from "react-icons/cg";
import { styled } from "@mui/material/styles";
import useValidate from "../../hooks/useValidate";
import { useFormik } from "formik";

const InputTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "7px",
    backgroundColor: "#fff",
    border: "1px solid rgba(0,0,0,.5)",

    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&:hover": {
      borderColor: "2px solid rgba(0,0,0,1)",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid rgba(0,0,0,1)",
      borderColor: "transparent",
    },
    "&.Mui-focused ": {
      border: "2px solid rgba(0,0,0,1)",
      // borderColor: "transparent",
    },
  },
  "& .MuiOutlinedInput-input": {
    padding: "24px 10px",
    paddingBottom: "12px",
    fontSize: "16px",
    fontWeight: "400",
    fontFamily: "Barlow, sans-serif",
    color: "var(--dark-1)",
  },
  "& .MuiInputLabel-root": {
    fontSize: "16px",
    fontWeight: "light",
    color: "var(--grey-1)",
    textTransform:"capitalize"
  },
  "& .MuiInputLabel-root.Mui-focused": {
    // Styles when the form is focused
    fontWeight: "400",
    color: "var(--dark-1)",
  },
  "& .MuiInputLabel-shrink": {
    transform: "translate(12px, 10px) scale(0.8)",
    color: "var(--dark-1)",
    fontWeight: "300",

  },
}));

const FormInput = ({
  types,
  setState,
  onChange,
  value,
  id,
  label,
  formdata,
  error,
  ...props
}) => {
  // const { values, errors, touched } = formdata;
  return (
    <div className="w-100 flex column">
      <InputTextField
        label={label}
        variant="outlined"
        fullWidth
        autoComplete="off"
        {...props}
        value={value}
        onChange={onChange}
        // error={!!errors[id] && touched[id]}
        // helperText={touched[id] && errors[id] ? errors[id] : ""}
      />
    </div>
  );
};

export default FormInput;
