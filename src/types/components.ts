import { ReactNode } from "react";

export type ImageButtonProps = {
  src: string;
  alt: string;
  toolTipText: string;
  onClick: () => void;
  fontSize?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  padding?: string;
  margin?: string;
  border?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  isDropDown?: boolean;
  isWordDropDownOpen?: boolean;
  fontFamily?: string;
  type?: "button" | "submit" | "reset";
  place?: any;
};

export type ImageDropdownProps = {
  src: string;
  alt: string;
  options: string[];
  optionsFunctions: (() => void)[];
  toolTipText: string;
  buttonProps: any;
  height?: string;
  optionsFontSize?: string;
  fontFamily?: string;
};

export type LogInForm = {
  email: string;
  password: string;
};

export type LogInProps = {
  goToSignUp: () => void;
};

export type ModalProps = {
  show: boolean;
  hide: () => void;
  content: ReactNode;
  width?: string;
  height?: string;
  title?: string;
  maxWidth?: string;
  maxHeight?: string;
  minWidth?: string;
  minHeight?: string;
};

export type Passwords = {
  password: string;
  confirmPassword: string;
};

export type SearchbarProps = {
  onSearch: (query: string) => void;
};

export type SidebarOptions = {
  name: string;
};

export type SidebarType = {
  options: SidebarOptions[];
  image_array: string[];
};

export type SignUpForm = {
  email: string;
  firstName: string;
  lastName: string;
};

export type SignUpProps = {
  goToLogIn: () => void;
};

export type WordButtonProps = {
  text: string;
  onClick: () => void;
  fontSize?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  padding?: string;
  margin?: string;
  border?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  isDropDown?: boolean;
  isWordDropDownOpen?: boolean;
  fontFamily?: string;
  type?: "button" | "submit" | "reset";
  fontWeight?: string;
};

export type WordDropDownProps = {
  title: string;
  options: string[];
  optionsFunctions: (() => void)[];
  buttonProps: any;
  height?: string;
  optionsFontSize?: string;
  fontFamily?: string;
};
