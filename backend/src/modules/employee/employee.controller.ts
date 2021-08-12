import { Body, Controller, Delete, Get, Param, Put, Post } from '@nestjs/common'
import { Employee } from './employee.entity'
import { EmployeeService } from './employee.service'

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  async createEmployee(@Body() input: Employee) {
    return this.employeeService.create(input)
  }

  @Get()
  async getAllEmployees() {
    return this.employeeService.getAll()
  }

  @Get('count')
  async countQuantityOfEmployees() {
    return this.employeeService.count()
  }

  @Get(':id')
  async getEmployeeById(@Param('id') id: string) {
    return this.employeeService.getById(id)
  }

  @Put(':id')
  async updateEmployee(@Param('id') id: string, @Body() input: Employee) {
    return this.employeeService.update(id, input)
  }

  @Delete(':id')
  async deleteEmployeeById(@Param('id') id: string) {
    return this.employeeService.removeFromId(id)
  }
}
