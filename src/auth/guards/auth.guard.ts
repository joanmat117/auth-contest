import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { type Request } from "express";
import config from "../../common/config"

@Injectable()
export class AuthGuard implements CanActivate {

  private readonly accessTokenCookieName:string = config.jwt.accessToken.cookieName
  private readonly refreshTokenCookieName:string = config.jwt.refreshToken.cookieName

  async canActivate(context:ExecutionContext):Promise<boolean>{

    const req = context.switchToHttp().getRequest<Request>()

    return true


  }
}
