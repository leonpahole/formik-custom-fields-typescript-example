import clsx from "clsx";
import React from "react";
import { InputWrapper } from "../shared/InputWrapper";
import { SharedInputProps } from "../shared/SharedInputProps";

// default HTML props for an input
type BuiltInTextInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

// custom props for custom functionality of the input
interface CustomTextInputProps {
  onKeyDownEnter?(): void;
  onChangeText?(text: string): void;
}

export type TextInputProps = BuiltInTextInputProps & SharedInputProps & CustomTextInputProps;

export const TextInput: React.FC<TextInputProps> = (props) => {
  const { label, errorText, helpText, onKeyDownEnter, onChangeText, ...inputProps } = props;
  const hasError = errorText != null;

  return (
    <InputWrapper id={inputProps.id} name={inputProps.name} label={label} helpText={helpText} errorText={errorText}>
      <input
        {...inputProps}
        onKeyDown={(e) => {
          // override onKeyDown to fire the enter key down event
          if (e.key === "Enter") {
            onKeyDownEnter?.();
          }

          inputProps.onKeyDown?.(e);
        }}
        onChange={(e) => {
          // override on change to fire change text event
          inputProps.onChange?.(e);
          onChangeText?.(e.target.value);
        }}
        className={clsx(inputProps.className, "input", { error: hasError })}
      />
    </InputWrapper>
  );
};
