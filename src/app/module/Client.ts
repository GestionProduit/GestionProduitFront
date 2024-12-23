export interface Client{
  id: number;
  nom: string;
  prenom: string;
  telephone: string;
  email: string;
  password: string;

}

export interface ClientResponseRequest{

   id?: number;

   nom?: string;

   prenom?:string;

   telephone?: string;

   email?:string;
   image?:string;

  password?:string;

}

export interface Login{
  usename?:string;
  password?:string;
}

export interface AuthResponse {
  token: string;
}

export interface RegisterRequest {
  username: string;
  password: string;
  email: string;

}

export interface LoginRequest{

  username: string;
  password: string;
}



















