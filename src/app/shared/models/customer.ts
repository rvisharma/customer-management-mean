export class Customer {
  name: string;
  id: number;
  email: string;

  constructor(name: string, email: string) {
    this.id = Date.now();
    this.name = name;
    this.email = email;
  }
}
