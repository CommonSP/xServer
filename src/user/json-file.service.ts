import {Injectable} from "@nestjs/common";
import * as fs from "fs"
import {IUser} from "./interfaces/IUser";


@Injectable()
export class JsonFileService {

    filePath = `${__dirname}/users.json`

    getAll() {
        try {
            if (!fs.existsSync(this.filePath)) {
                return null
            }
            const users = JSON.parse(fs.readFileSync(this.filePath, {encoding: 'utf8'})) as IUser
            return users
        } catch (err) {
            console.error(err)
        }
    }

    getById(id: string): IUser {
        try {
            if (!fs.existsSync(this.filePath)) {
                return null
            }
            const users = JSON.parse(fs.readFileSync(this.filePath, {encoding: 'utf8'})) as IUser[]
            const user = users.find(user => user.SteamId === id)
            return user
        } catch (err) {
            console.error(err)
        }

    }

    createUser(data: IUser) {
        try {
            if (!fs.existsSync(this.filePath)) {
                const users = []
                users.push(data)
                fs.writeFileSync(this.filePath, JSON.stringify(users, null, 2))
                return data
            }
            const users = JSON.parse(fs.readFileSync(this.filePath, {encoding: 'utf8'})) as IUser[]
            const candidateUser = users.find(user => user.SteamId === data.SteamId)
            if (!candidateUser) {
                users.push(data)
                fs.writeFileSync(this.filePath, JSON.stringify(users, null, 2))
                return data
            } else {
                return "Такой пользователь уже существует"
            }
        } catch (err) {
            console.error(err)
        }
    }
    deleteUser(id: string){
        try {
            if (!fs.existsSync(this.filePath)) {
                return null
            }
            const users = JSON.parse(fs.readFileSync(this.filePath, {encoding: 'utf8'})) as IUser[]
            const user = users.find(user => user.SteamId === id)
            if(user){
                const idx = users.indexOf(user)
                users.splice(idx,1)
                fs.writeFileSync(this.filePath, JSON.stringify(users, null, 2))
                return user
            }else {
                return "Данного полльзователя не существует"
            }

        } catch (err) {
            console.error(err)
        }

    }
}

