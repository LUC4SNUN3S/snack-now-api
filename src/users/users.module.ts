import { Module } from '@nestjs/common';
import { UsersController } from '@src/users/users.controller';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [],
})
export class UsersModule {}
