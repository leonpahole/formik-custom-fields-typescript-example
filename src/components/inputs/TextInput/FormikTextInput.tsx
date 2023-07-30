import React from "react";
import { useField } from "formik";
import { TextInput, TextInputProps } from "./TextInput";

export const FormikTextInput: React.FC<TextInputProps> = (props) => {
  const [field, meta] = useField(props.name);
  return <TextInput id={field.name} {...field} {...props} errorText={meta.touched ? meta.error : undefined} />;
};
