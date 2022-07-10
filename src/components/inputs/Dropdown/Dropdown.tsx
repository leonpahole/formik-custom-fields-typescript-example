import clsx from "clsx";
import React from "react";
import { InputWrapper } from "../shared/InputWrapper";
import { SharedInputProps } from "../shared/SharedInputProps";

// default HTML props for an input
type BuiltInDropdownProps = React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;

export interface DropdownOption {
  title: string;
  value: string;
}

// custom props for custom functionality of the input
interface CustomDropdownProps {
  selectOptionText?: string;
  options: DropdownOption[];
  onSelectOption?(option: any): void;
}

export type DropdownProps = BuiltInDropdownProps & SharedInputProps & CustomDropdownProps;

export const Dropdown: React.FC<DropdownProps> = (props) => {
  const {
    label,
    helpText,
    errorText,
    options,
    onSelectOption,
    selectOptionText = "Select your option...",
    ...dropdownProps
  } = props;
  const hasError = errorText != null;

  return (
    <InputWrapper
      id={dropdownProps.id}
      name={dropdownProps.name}
      label={label}
      helpText={helpText}
      errorText={errorText}
    >
      <select
        {...dropdownProps}
        onChange={(e) => {
          // override on change to fire on select option event
          dropdownProps.onChange?.(e);
          onSelectOption?.(e.target.value);
        }}
        className={clsx(dropdownProps.className, "input", { error: hasError })}
      >
        <option value={undefined} disabled selected>
          {selectOptionText}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.title}
          </option>
        ))}
      </select>
    </InputWrapper>
  );
};
