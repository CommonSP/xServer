import {Module} from '@nestjs/common';
import {UserService} from './user.service';
import {UserController} from "./user.controller";
import {JsonFileService} from "./json-file.service"

@Module({
    controllers: [UserController],
    providers: [UserService, JsonFileService]
})
export class UserModule {
}
