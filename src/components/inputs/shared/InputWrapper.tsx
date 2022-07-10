import React from "react";
import { SharedInputProps } from "./SharedInputProps";
import "./SharedInputStyles.css";

type IProps = SharedInputProps & { id?: string; children?: React.ReactNode };

export const InputWrapper: React.FC<IProps> = ({ label, id, name, errorText, helpText, children }) => (
  <label htmlFor={id || name} className="input-label">
    {label}
    {children}
    <div className="input-bottom-text-container">
      {helpText && <span className="input-help-text">{helpText}</span>}
      {errorText && <span className="input-error-text">{errorText}</span>}
    </div>
  </label>
);
