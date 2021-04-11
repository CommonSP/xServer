import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';

const PORT = process.env.PORT || 3000

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000, () => {
            console.log(`Server has been started on ${PORT} port`)
        }
    );
    app.enableCors()
}

bootstrap();
