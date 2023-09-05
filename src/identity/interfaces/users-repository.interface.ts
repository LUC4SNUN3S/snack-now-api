export interface UserInterface {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  name: string;
  passwordHash: string;
  phoneNumber: string;
}
