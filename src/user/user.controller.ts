import {Body, Controller, Delete, Get, Param, Post, UseGuards} from "@nestjs/common";
import {UserService} from "./user.service";
import {UserAuthGuard} from "../user-auth.guard";
import {CreateUserDto} from "./dto/create-user.dto";
import {JsonFileService} from "./json-file.service";

@Controller('/user')
export class UserController {
    constructor(private userService: UserService,
                private jsonService: JsonFileService) {
    }

    @Get()
    @UseGuards(UserAuthGuard)
    getAll() {
        return this.jsonService.getAll()
    }

    @Get(':id')
    @UseGuards(UserAuthGuard)
    getUserById(@Param('id') id: string) {
        return this.jsonService.getById(id)
    }

    @Post()
    @UseGuards(UserAuthGuard)
    createUser(@Body() user: CreateUserDto) {
        return this.jsonService.createUser(user)
    }
    @Delete(':id')
    @UseGuards(UserAuthGuard)
    deleteUser(@Param('id') id: string){
        return this.jsonService.deleteUser(id)
    }
}
