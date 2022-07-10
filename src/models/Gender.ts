import { DropdownOption } from "../components/inputs/Dropdown/Dropdown";

export enum Gender {
  FEMALE = "FEMALE",
  MALE = "MALE",
  RATHER_NOT_SAY = "RATHER_NOT_SAY",
}

export const genderDropdownOptions: DropdownOption[] = [
  { title: "Female", value: Gender.FEMALE },
  { title: "Male", value: Gender.MALE },
  { title: "Rather not say", value: Gender.RATHER_NOT_SAY },
];
