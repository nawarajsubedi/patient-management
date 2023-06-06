import { User } from "./User";

export interface AuthResponse {
  success: boolean;
  token?: string;
  user?: User;
  error?: { message?: string };
}
