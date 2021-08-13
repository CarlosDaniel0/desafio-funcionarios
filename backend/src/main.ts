import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true })

  const config = new DocumentBuilder()
    .setTitle('Funcionários')
    .setDescription('API para o desafio 3LM Informática')
    .setVersion('1.0')
    .addTag('funcionarios')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('', app, document)

  app.useGlobalPipes(new ValidationPipe())
  await app.listen(process.env.PORT || 3000)
}
bootstrap()
