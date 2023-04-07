interface IEmailPassword {
  email: string;
  password: string;
}

export interface IUser extends IEmailPassword {
  id?: string;
  name: string;
}

export interface IAuth extends IEmailPassword {
  name?: string;
}
