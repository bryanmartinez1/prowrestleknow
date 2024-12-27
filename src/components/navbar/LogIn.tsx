import React, { useState } from "react";
import "./navbar.css";
import authConstants from "../../constants/Auth.json";
import WordButton from "../buttons/WordButton";
import {
  modalWordButtonProperties,
  submitButton,
} from "../../defaultCSS/Button";

interface LogInForm {
  email: string;
  password: string;
}

type LogInProps = {
  goToSignUp: () => void;
};

export default function LogIn({ goToSignUp }: LogInProps) {
  const [loginForm, setLoginForm] = useState<LogInForm>({
    email: "",
    password: "",
  });
  const onSubmit = () => {
    alert(`${loginForm.email}\n${loginForm.password}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="authHolder">
      <form className="formHolder" onSubmit={onSubmit} noValidate>
        <label className="authLabel">{authConstants.form.fields.email}</label>
        <input
          className="authInput"
          type="email"
          placeholder="Enter email address here"
          value={loginForm.email}
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
          value={loginForm.password}
          onChange={handleChange}
        />
        <div className="authFormButton">
          <WordButton
            text={authConstants.account.dontHaveAccount}
            onClick={() => goToSignUp()}
            {...modalWordButtonProperties}
            padding="5px 5px 5px 5px"
            fontSize="14px"
          />
          <WordButton
            text={authConstants.password.forgot}
            onClick={() => goToSignUp()}
            {...modalWordButtonProperties}
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
