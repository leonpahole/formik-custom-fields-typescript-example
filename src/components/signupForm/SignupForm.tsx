import clsx from "clsx";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Gender, genderDropdownOptions } from "../../models/Gender";
import { FormikDropdown } from "../inputs/Dropdown/FormikDropdown";
import { FormikRatingInput } from "../inputs/RatingInput/FormikRatingInput";
import { FormikTextInput } from "../inputs/TextInput/FormikTextInput";
import "./SignupForm.css";

interface SignupFormValues {
  email: string;
  fullName: string;
  password: string;
  passwordConfirmation: string;
  gender?: Gender;
  rating?: number;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Please enter a valid email address.").required("Please enter your email."),
  fullName: Yup.string().required("Please enter your full name."),
  password: Yup.string().required("Please enter your password.").min(7, "Password must be at least 7 characters long."),
  passwordConfirmation: Yup.string()
    .required("Please confirm your password.")
    .oneOf([Yup.ref("password"), null], "Passwords don't match."),
  gender: Yup.mixed().oneOf(Object.values(Gender)),
  rating: Yup.number().required("Rating is required."),
});

export const SignupForm: React.FC = () => (
  <div className="signup-form-container">
    <h1 className="signup-form-header">Signup</h1>
    <Formik<SignupFormValues>
      initialValues={{
        email: "",
        fullName: "",
        password: "",
        passwordConfirmation: "",
        gender: undefined,
        rating: undefined,
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          // eslint-disable-next-line no-alert
          alert(JSON.stringify(values, null, 2));
          resetForm();
          setSubmitting(false);
        }, 500);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="signup-form">
          <FormikTextInput
            name="email"
            label="Email"
            type="email"
            helpText="Your email will not be visible to other users."
            placeholder="Enter your email..."
          />

          <FormikTextInput name="fullName" label="Full name" placeholder="Enter your full name..." />

          <FormikTextInput name="password" label="Password" type="password" placeholder="Enter a strong password..." />

          <FormikTextInput
            name="passwordConfirmation"
            label="Confirm your password"
            type="password"
            placeholder="Confirm your strong password..."
          />

          <FormikDropdown
            name="gender"
            label="Gender"
            selectOptionText="Select your gender..."
            options={genderDropdownOptions}
          />

          <FormikRatingInput
            name="rating"
            label="How would you rate yourself in terms of your programming skills?"
            helpText="We'll suggest articles based on your skill level."
            from={1}
            to={5}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className={clsx("signup-form-submit-button", { "is-submitting": isSubmitting })}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);
