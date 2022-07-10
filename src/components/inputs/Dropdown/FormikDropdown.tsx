import React from "react";
import { useField } from "formik";
import { Dropdown, DropdownProps } from "./Dropdown";

export const FormikDropdown: React.FC<DropdownProps> = (props) => {
  const [field, meta] = useField(props.name);
  return <Dropdown id={field.name} {...field} {...props} errorText={meta.error} />;
};
