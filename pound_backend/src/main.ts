import "./instrument";
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: process.env.NEXT_ENDPOINT,
    credentials: true,
  });
  
  const server = app.getHttpAdapter();
  // Add health check endpoint using the HTTP adapter
  server.get('/healthcheck', (req, res) => {
    res.status(200).send('OK');
  });
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
