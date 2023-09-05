import * as bcrypt from 'bcrypt';

export const hashPassword = async (password: string) => {
  const SALT_ROUNDS = 10;

  return bcrypt.hash(password, SALT_ROUNDS);
};
