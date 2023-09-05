import { ApiConflict } from '@src/core/exceptions/exceptions';
import { InMemoryUserRepository } from '@src/identity/repositories/in-memory/in-memory-identity.repository';
import { CreateUserUseCase } from '@src/identity/use-cases/create-user/create-user.usecase';

let userRepository: InMemoryUserRepository;
let sut: CreateUserUseCase;

describe('Create User', () => {
  beforeEach(() => {
    userRepository = new InMemoryUserRepository();
    sut = new CreateUserUseCase(userRepository);
  });

  it.skip('should be able to create a user', async () => {
    const user = await sut.execute({
      email: 'johndoe@gmail.com',
      name: 'John Doe',
      password: '123456',
      phoneNumber: '84991930739',
    });

    expect(user.id).toEqual(expect.any(String));
  });

  it('should not be able to create a user with an email already in use', async () => {
    const email = 'johndoe@gmail.com';

    await sut.execute({
      email,
      name: 'John Doe',
      password: '123456',
      phoneNumber: '84991930739',
    });

    await expect(
      sut.execute({
        email,
        name: 'John Doe',
        password: '123456',
        phoneNumber: '84991930739',
      }),
    ).rejects.toBeInstanceOf(ApiConflict);
  });
});
