import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOptions = {
    origin: ['http://localhost:3000'],
    optionsSuccessStatus: 200,
  };

  app.enableCors(corsOptions);
  app.setGlobalPrefix('datawow/api');

  app.enableVersioning({
    type: VersioningType.URI,
  });

  await app.listen(5000);

  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
