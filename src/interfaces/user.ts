interface IEmailPassword {
  email: string;
  password: string;
}

export interface IUser extends IEmailPassword {
  name?: string;
}
