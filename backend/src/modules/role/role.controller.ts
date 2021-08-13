import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { Role } from './role.entity'
import { RoleService } from './role.service'

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  /**
   * Cria um novo cargo
   * @param {Role} input
   * @returns response
   */
  @Post()
  async createRole(@Body() input: Role) {
    return this.roleService.create(input)
  }

  /**
   * Buscar todos os cargos
   * @returns {Role[]} response
   */
  @Get()
  async getAllRoles() {
    return this.roleService.getAll()
  }

  /**
   * Buscar a quantidade de cargos
   * @returns {int} response
   */
  @Get('count')
  async countQuantityOfRoles() {
    return this.roleService.count()
  }

  /**
   * Busca um cargo pelo id
   * @param {string} input
   * @returns {Role} cargo
   */
  @Get(':id')
  async getRoleById(@Param('id') id: string) {
    return this.roleService.getById(id)
  }

  /**
   * Atualiza o cargo pelo id
   * @param {string} id
   * @param {Role} input
   * @returns {Role} cargo
   */
  @Put(':id')
  async updateRole(@Param('id') id: string, @Body() input: Role) {
    return this.roleService.update(id, input)
  }

  /**
   * Remover o cargo pelo id
   * @param {string} id
   * @returns {boolean} response
   */
  @Delete(':id')
  async deleteRoleById(@Param('id') id: string) {
    return this.roleService.removeFromId(id)
  }
}
