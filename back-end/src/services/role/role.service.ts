import { Injectable } from '@nestjs/common';
import { RoleRepository } from '@repository/role.repository';

@Injectable()
export class RoleService {
  constructor(private repository: RoleRepository) {}

  async create(roleRequest: any): Promise<any> {
    const newRole = await this.repository.create({
      name: roleRequest.name,
      description: roleRequest.description,
    });
    return newRole;
  }
}
