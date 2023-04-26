import {
  LoginErrorState,
  LoginFormState,
  SignUpErrorState,
  SignUpFormState,
} from "../types/types";

export const validateForm = (userData: SignUpFormState): SignUpErrorState => {
  const errors: SignUpErrorState = {};
  if (!userData.username.trim()) {
    errors.username = "Username is required";
  } else if (!/^[a-zA-Z0-9_-]{3,16}$/.test(userData.username)) {
    errors.username =
      "Username must be between 3 and 16 characters and can only contain letters, numbers, underscores and hyphens";
  }
  if (!userData.username.trim()) {
    errors.username = "Username is required";
  }
  if (!userData.email.trim()) {
    errors.email = "Email is required";
  } else if (!validateEmail(userData.email)) {
    errors.email = "Please enter a valid email address";
  }
  if (!userData.password.trim()) {
    errors.password = "Password is required";
  } else if (userData.password.trim().length < 8) {
    errors.password = "Password must be at least 8 characters long";
  } else if (!validatePassword(userData.password)) {
    errors.password =
      "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character";
  }
  return errors;
};
export const loginValidateForm = (
  userData: LoginFormState
): LoginErrorState => {
  const errors: LoginErrorState = {};
  if (!userData.identifier.trim()) {
    errors.identifier = "Email is required";
  } else if (!validateEmail(userData.identifier)) {
    errors.identifier = "Please enter a valid email address";
  }
  if (!userData.password.trim()) {
    errors.password = "Password is required";
  } else if (userData.password.trim().length < 8) {
    errors.password = "Password must be at least 8 characters long";
  } else if (!validatePassword(userData.password)) {
    errors.password = "Invalid password";
  }
  return errors;
};

const validateEmail = (email: string): boolean => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
};

const validatePassword = (password: string): boolean => {
  const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  return pattern.test(password);
};
