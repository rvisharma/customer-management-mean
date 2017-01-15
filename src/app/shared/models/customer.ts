export class Customer {
  name: string;
  id: number;
  email: string;

  constructor(name: string, email: string, id: number = Date.now() ) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}
