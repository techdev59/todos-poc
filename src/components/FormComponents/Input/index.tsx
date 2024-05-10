// React Imports
import { forwardRef } from "react";

// UI Imports
import { TextField } from "@mui/material";

// UI Components Imports
import ErrorMessage from "@/components/FormComponents/ErrorMessage";

const FormInput = forwardRef(
  ({ label, children, error, id, ...props }: InputProps, ref) => {
    return (
      <>
        <TextField
          className="w-full"
          inputRef={ref}
          label={label}
          {...props}
          error={error ? true : false}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </>
    );
  }
);

FormInput.displayName = "FormInput";

export default FormInput;
