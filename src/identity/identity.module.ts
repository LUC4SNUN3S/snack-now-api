import { Module } from '@nestjs/common';
import { AuthController } from '@src/identity/auth.controller';
import { PrismaUserRepository } from '@src/identity/repositories/prisma/prisma-identity.repository';
import { UserRepository } from '@src/identity/repositories/users.repository';
import { CreateUserUseCase } from '@src/identity/use-cases/create-user/create-user.usecase';
import { UserController } from '@src/identity/user.controller';

@Module({
  imports: [],
  controllers: [UserController, AuthController],
  providers: [
    { provide: UserRepository, useClass: PrismaUserRepository },
    CreateUserUseCase,
  ],
})
export class IdentityModule {}
