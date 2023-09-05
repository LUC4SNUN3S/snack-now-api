import './config/aliases';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '@src/app.module';
import { MyExceptionFilter } from '@src/core/filters/http-exception.filter';
import { ValidationPipe } from '@src/core/pipes/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new MyExceptionFilter());

  await app.listen(3000);
}
bootstrap();
