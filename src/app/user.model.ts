 

export class User {
    id: number;
    username: string;
    email: string;
    password: string;
    rola: string;
  
    constructor( id: number,
        username: string,
        email: string,
        password: string,
        rola: string) {
      this.id = id;
      this.username = username;
      this.email = email;
      this.password = password;
      this.rola = rola;
    }
  }
  