import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import {Observable, of} from 'rxjs';

const TOKEN = process.env.TOKEN || 'pipiska'
@Injectable()
export class UserAuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const token = context.switchToHttp().getRequest<Request>().headers['token']
    if (token === TOKEN) return of(true)
    return of(false)
  }
}
