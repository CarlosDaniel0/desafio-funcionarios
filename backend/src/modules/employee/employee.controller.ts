import { Body, Controller, Delete, Get, Param, Put, Post } from '@nestjs/common'
import { Employee } from './employee.entity'
import { EmployeeService } from './employee.service'

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  /**
   * Adiciona um novo empregado
   * @param {Employee} input
   * @returns {Employee} response
   */
  @Post()
  async createEmployee(@Body() input: Employee) {
    return this.employeeService.create(input)
  }

  /**
   * Busca todos os empregados
   * @returns {Employee[]} employees
   */
  @Get()
  async getAllEmployees() {
    return this.employeeService.getAll()
  }

  /**
   * Busca a quantidade de empregados
   * @returns {int} quantidade
   */
  @Get('count')
  async countQuantityOfEmployees() {
    return this.employeeService.count()
  }

  /**
   * Buscar empregado por id
   * @returns {Employee} empregado
   */
  @Get(':id')
  async getEmployeeById(@Param('id') id: string) {
    return this.employeeService.getById(id)
  }

  /**
   * Atualiza o empregado pelo id
   * @param {string} id
   * @param {Employee} input
   * @returns {Employee} empregado
   */
  @Put(':id')
  async updateEmployee(@Param('id') id: string, @Body() input: Employee) {
    return this.employeeService.update(id, input)
  }

  /**
   * Remove o empregado pelo id
   * @param {string} id
   * @returns {boolean} resposta
   */
  @Delete(':id')
  async deleteEmployeeById(@Param('id') id: string) {
    return this.employeeService.removeFromId(id)
  }
}
