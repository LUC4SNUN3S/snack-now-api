import { CreateUserDto } from '@src/identity/dtos/create-user.dto';
import { UserInterface } from '@src/identity/interfaces/users-repository.interface';

export abstract class UserRepository {
  abstract createUser(createUserDto: CreateUserDto): Promise<UserInterface>;

  abstract getUserByEmail(email: string): Promise<UserInterface>;

  abstract getUserByPhoneNumber(phoneNumber: string): Promise<UserInterface>;
}
