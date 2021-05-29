import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private configService: ConfigService) {
    super({
      // ExtractJwt.fromAuthHeaderAsBearerToken(); check token by Header
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          return request?.cookies['jwt'];
        },
      ]),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('secret_key'),
    });
  }

  async validate(payload: any) {
    return { id: payload.userId };
  }
}
