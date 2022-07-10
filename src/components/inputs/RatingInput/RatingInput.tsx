import clsx from "clsx";
import React from "react";
import { getNumberSequence } from "../../../util/math-util";
import { InputWrapper } from "../shared/InputWrapper";
import { SharedInputProps } from "../shared/SharedInputProps";
import "./RatingInput.css";

interface CustomRatingInputProps {
  id?: string;
  from: number;
  to: number;
  value?: number;
  onSelect?(rating: number): void;
  onBlur?: React.FocusEventHandler<HTMLDivElement>;
}

export type RatingInputProps = SharedInputProps & CustomRatingInputProps;

export const RatingInput: React.FC<RatingInputProps> = (props) => {
  const { from, to, onSelect, onBlur, value, ...customProps } = props;
  const sequence = getNumberSequence(from, to);

  return (
    <InputWrapper {...customProps}>
      <div className="rating-input-circles-container" onBlur={onBlur}>
        {sequence.map((rating) => {
          const isSelected = rating === value;
          return (
            <button
              key={rating}
              type="button"
              className={clsx("rating-circle", { selected: isSelected })}
              onClick={() => {
                onSelect?.(rating);
              }}
            >
              {rating}
            </button>
          );
        })}
      </div>
    </InputWrapper>
  );
};
