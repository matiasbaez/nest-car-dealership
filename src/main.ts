import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true, // remove the fields that there's not in the dto
			forbidNonWhitelisted: true, // throw an error if there are any non-whitelisted fields
		}),
	);
	await app.listen(3000);
}
bootstrap();
