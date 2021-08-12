import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { Role } from './role.entity'
import { RoleService } from './role.service'

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  async createEmployee(@Body() input: Role) {
    return this.roleService.create(input)
  }

  @Get()
  async getAllRoles() {
    return this.roleService.getAll()
  }

  @Get('count')
  async countQuantityOfRoles() {
    return this.roleService.count()
  }

  @Get(':id')
  async getEmployeeById(@Param('id') id: string) {
    return this.roleService.getById(id)
  }

  @Put(':id')
  async updateEmployee(@Param('id') id: string, @Body() input: Role) {
    return this.roleService.update(id, input)
  }

  @Delete(':id')
  async deleteEmployeeById(@Param('id') id: string) {
    return this.roleService.removeFromId(id)
  }
}
