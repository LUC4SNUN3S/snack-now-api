import { Module } from '@nestjs/common';
import { IdentityModule } from '@src/identity/identity.module';

@Module({
  imports: [IdentityModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
