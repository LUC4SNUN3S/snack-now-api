import { MessagesValidations as Msgs } from '@src/core/constants/messages-validations';
import { IsNotBlank } from '@src/core/decorators/is-not-blank.decorator';
import { IsEmail, IsPhoneNumber, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail({}, { message: Msgs.isEmail('email') })
  email: string;

  @MaxLength(150, { message: Msgs.minLength('nome') })
  @IsNotBlank({ message: Msgs.isNotBlank('nome') })
  name: string;

  @IsNotBlank({ message: Msgs.isNotBlank('senha') })
  password: string;

  @IsPhoneNumber('BR', { message: Msgs.isPhoneNumber('Número de telefone') })
  phoneNumber: string;
}
