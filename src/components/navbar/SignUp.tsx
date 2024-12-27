import React, { useState } from "react";
import WordButton from "../buttons/WordButton";
import authConstants from "../../constants/Auth.json";
import "./navbar.css";
import { wordButtonProperties, submitButton } from "../../defaultCSS/Button";

interface SignUpForm {
  email: string;
  firstName: string;
  lastName: string;
}

interface Passwords {
  password: string;
  confirmPassword: string;
}

type SignUpProps = {
  goToLogIn: () => void;
};

export default function SignUp({ goToLogIn }: SignUpProps) {
  const [signupForm, setSignupForm] = useState<SignUpForm>({
    email: "",
    firstName: "",
    lastName: "",
  });

  const [passwordForm, setPasswordForm] = useState<Passwords>({
    password: "",
    confirmPassword: "",
  });

  const onSubmit = async (e: React.FormEvent) => {
    alert(`${signupForm.email}\n${passwordForm.password}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupForm((prev) => ({ ...prev, [name]: value }));
  };

  const passwordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="authHolder">
      <form className="formHolder" onSubmit={onSubmit} noValidate>
        <label className="authLabel">{authConstants.form.fields.email}</label>
        <input
          className="authInput"
          type="email"
          placeholder="Enter email address here"
          value={signupForm.email}
          name="email"
          onChange={handleChange}
        />
        <label className="authLabel">
          {authConstants.form.fields.password}
        </label>
        <input
          className="authInput"
          type="password"
          name="password"
          placeholder="Enter password here"
          value={passwordForm.password}
          onChange={passwordChange}
        />
        <label className="authLabel">
          {authConstants.form.fields.confirmPassword}
        </label>
        <input
          className="authInput"
          type="password"
          placeholder="Confirm password"
          value={passwordForm.confirmPassword}
          name="confirmPassword"
          onChange={passwordChange}
        />
        <label className="authLabel">
          {authConstants.form.fields.firstName}
        </label>
        <input
          className="authInput"
          type="text"
          placeholder="Enter first name"
          value={signupForm.firstName}
          name="firstName"
          onChange={handleChange}
        />
        <label className="authLabel">
          {authConstants.form.fields.lastName}
        </label>
        <input
          className="authInput"
          type="text"
          placeholder="Enter last name"
          value={signupForm.lastName}
          name="lastName"
          onChange={handleChange}
        />
        <div className="authFormButton">
          <WordButton
            text={authConstants.account.haveAccount}
            onClick={() => goToLogIn()}
            {...wordButtonProperties}
            padding="5px 5px 5px 5px"
            fontSize="14px"
          />
          <WordButton
            text={authConstants.form.buttons.submit}
            onClick={() => {}}
            type="submit"
            {...submitButton}
          />
        </div>
      </form>
    </div>
  );
}
