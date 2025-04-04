export type Adress = {
  logradouro: string;
  number: string;
  city: string;
  uf: string;
  country: string;
};
export type User = {
  user_id: string;
  photo: string;
  name: string;
  endereco: Adress;
};
export type Session = {
  token: string;
  user: User;
};
