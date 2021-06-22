import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserService } from '@services/user/user.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserRole } from 'src/interface/role/role.interface';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector, private userService: UserService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    return this.userService.findOne(user.id).pipe(
      map((role: any) => {
        const hasRole = roles.includes(
            role && role?.length > 0
            ? role[0]?.permissions
            : UserRole.USER,
        );

        return role && hasRole;
      }),
    );
  }
}
