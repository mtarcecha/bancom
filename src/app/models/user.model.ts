export interface User {
  id?: string;
  name?: string;
  username?: string;
  email: string;
  password? : string;
  address?: Address
}

export interface Address {
  street: string;
  suite: string;
  city: string;
}