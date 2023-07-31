import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const InputTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "4px",
    backgroundColor: "#fff",
    border: "1px solid rgba(0,0,0,.4)",

    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid rgba(0,0,0,1)",
      borderColor: "transparent",
    },
  },
  "& .MuiOutlinedInput-input": {
    padding: "20px 10px",
    fontSize: "15px",
    fontWeight: "400",
    fontFamily: "CustomFont2_light, sans-serif",
    color: "var(--dark-1)",
    textTransform: "Capitalize",
  },
  "& .MuiInputLabel-root": {
    fontSize: "15px",
    fontWeight: "400",
    color: "var(--dark-1)",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    // Styles when the form is focused
    color: "var(--dark-1)",
    fontWeight: "400",
  },
  "& .MuiInputLabel-shrink": {
    transform: "translate(12px, 1px) scale(0.85)",
  },
}));

const FormInput = ({ types, setState, onChange, value, id, ...props }) => {
  return (
    <InputTextField
      label={id}
      variant="outlined"
      fullWidth
      autoComplete="off"
      {...props}
      value={value}
      onChange={onChange}
      multiline={types === "textarea"}
    />
  );
};

export default FormInput;
