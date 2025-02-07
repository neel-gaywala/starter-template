export interface UserInfoForm {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  code?: string;
}

export interface UserInfoFormError {
  firstName?: boolean;
  lastName?: boolean;
  email: boolean;
  password: boolean;
  code?: boolean;
}

export interface LoginError {
  code: string;
  message: string;
  longMessage?: string;
}
