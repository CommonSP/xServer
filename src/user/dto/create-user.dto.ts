export class CreateUserDto {
    readonly SteamId: string
    readonly IpAddress: string
    readonly BanStart: string
    readonly BanEnd: string
    readonly Reason: string
}
