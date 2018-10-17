export class User {
  login: string;
  name: string;
  role: string;

  constructor(login: string, name: string, role: string) {
    this.login = login;
    this.name = name;
    this.role = role;
  }
}
