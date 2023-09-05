import { Injectable } from '@nestjs/common';
import { ApiConflict } from '@src/core/exceptions/exceptions';
import { CreateUserDto } from '@src/identity/dtos/create-user.dto';
import { UserRepository } from '@src/identity/repositories/users.repository';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  private async applyValidations(createUserDto: CreateUserDto): Promise<void> {
    const userByEmail = await this.userRepository.getUserByEmail(
      createUserDto.email,
    );

    if (userByEmail) {
      throw new ApiConflict('Ops! usuário já existe');
    }

    const userByPhoneNumber = await this.userRepository.getUserByPhoneNumber(
      createUserDto.phoneNumber,
    );

    if (userByPhoneNumber) {
      throw new ApiConflict('Ops! número de telefone já existe');
    }
  }

  async execute(createUserDto: CreateUserDto) {
    // TODO Validar Dto

    await this.applyValidations(createUserDto);

    return await this.userRepository.createUser(createUserDto);
  }
}
