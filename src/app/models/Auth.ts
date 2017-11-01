import { User } from './User';

export class Auth {
  message: string;
  response?: User[];
  status: number;
  token?: string;
}
