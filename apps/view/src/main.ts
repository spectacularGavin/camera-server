import { NestFactory } from '@nestjs/core';
import { ViewModule } from './view.module';

async function bootstrap() {
  const app = await NestFactory.create(ViewModule);
  await app.listen(3000);
}
bootstrap();
