import { hashPassword } from '@src/core/utils/hash.util';
import { CreateUserDto } from '@src/identity/dtos/create-user.dto';
import { UserInterface } from '@src/identity/interfaces/users-repository.interface';
import { UserRepository } from '@src/identity/repositories/users.repository';
import { randomUUID } from 'crypto';

export class InMemoryUserRepository implements UserRepository {
  public users: UserInterface[] = [];

  async createUser(createUserDto: CreateUserDto): Promise<UserInterface> {
    const user: UserInterface = {
      id: randomUUID(),
      email: createUserDto.email,
      name: createUserDto.name,
      passwordHash: await hashPassword(createUserDto.password),
      phoneNumber: createUserDto.phoneNumber,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.users.push(user);

    return user;
  }

  async getUserByEmail(email: string): Promise<UserInterface> {
    return this.users.find((user) => user.email === email);
  }

  async getUserByPhoneNumber(phoneNumber: string): Promise<UserInterface> {
    return this.users.find((user) => user.phoneNumber === phoneNumber);
  }
}
