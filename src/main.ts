import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.setGlobalPrefix('api');  
  const PORT = process.env.PORT || 3000;
  console.log(`server is running on port ${PORT}`)
  await app.listen(PORT) ;
}
bootstrap();
