import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '@src/identity/dtos/create-user.dto';
import { UserInterface } from '@src/identity/interfaces/users-repository.interface';
import { CreateUserUseCase } from '@src/identity/use-cases/create-user/create-user.usecase';

@Controller('user')
export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {
    //
  }

  @Post()
  async createUser(
    @Body() createUserDto: CreateUserDto,
  ): Promise<UserInterface> {
    return await this.createUserUseCase.execute({
      email: createUserDto.email,
      password: createUserDto.password,
      name: createUserDto.name,
      phoneNumber: createUserDto.phoneNumber,
    });
  }
}
