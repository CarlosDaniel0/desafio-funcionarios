import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Role } from './role.entity'

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>
  ) {}

  async create(input: Role): Promise<Role> {
    return this.roleRepository.save(input)
  }

  async getAll(): Promise<Role[]> {
    return this.roleRepository.find()
  }

  async count(): Promise<number> {
    return this.roleRepository.count()
  }

  async getById(id: string): Promise<Role> {
    return this.roleRepository.findOne(id, { loadRelationIds: true })
  }

  async update(id: string, input: Role): Promise<boolean> {
    try {
      await this.roleRepository.update(id, {
        id: id,
        name: input.name,
        wage: input.wage,
        description: input.description
      })
      return true
    } catch (err) {
      return false
    }
  }

  async removeFromId(id: string): Promise<boolean> {
    try {
      await this.roleRepository.delete(id)
      return true
    } catch (err) {
      return false
    }
  }
}
