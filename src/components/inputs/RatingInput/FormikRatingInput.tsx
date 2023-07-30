import { useField } from "formik";
import React from "react";
import { RatingInput, RatingInputProps } from "./RatingInput";

export const FormikRatingInput: React.FC<RatingInputProps> = (props) => {
  const [field, meta, { setValue }] = useField(props.name);
  return (
    <RatingInput
      id={field.name}
      {...field}
      onSelect={(rating) => {
        setValue(rating);
      }}
      {...props}
      errorText={meta.touched ? meta.error : undefined}
    />
  );
};
