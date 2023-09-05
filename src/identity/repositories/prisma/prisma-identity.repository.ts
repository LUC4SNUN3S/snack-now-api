import { PrismaService } from '@src/core/database/prisma.service';
import { hashPassword } from '@src/core/utils/hash.util';
import { CreateUserDto } from '@src/identity/dtos/create-user.dto';
import { UserInterface } from '@src/identity/interfaces/users-repository.interface';
import { UserRepository } from '@src/identity/repositories/users.repository';
import { randomUUID } from 'crypto';

export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(createUserDto: CreateUserDto): Promise<UserInterface> {
    const uuid = randomUUID();
    const passwordHash = await hashPassword(createUserDto.password);

    return this.prisma.user.create({
      data: {
        id: uuid,
        email: createUserDto.email,
        name: createUserDto.name,
        passwordHash,
        phoneNumber: createUserDto.phoneNumber,
      },
    });
  }

  async getUserByEmail(email: string): Promise<UserInterface> {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  getUserByPhoneNumber(phoneNumber: string): Promise<UserInterface> {
    return this.prisma.user.findUnique({
      where: {
        phoneNumber,
      },
    });
  }
}
