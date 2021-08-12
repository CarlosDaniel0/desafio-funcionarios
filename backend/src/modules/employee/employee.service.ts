import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Employee } from './employee.entity'

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>
  ) {}

  async create(input: Employee): Promise<Employee> {
    return this.employeeRepository.save(input)
  }

  async getAll(): Promise<Employee[]> {
    return this.employeeRepository.find({ relations: ['role'] })
  }

  async count(): Promise<any> {
    return this.employeeRepository.count()
  }

  async getById(id: string): Promise<Employee> {
    return this.employeeRepository.findOne(id, { relations: ['role'] })
  }

  async update(id: string, input: Employee): Promise<boolean> {
    try {
      await this.employeeRepository.update(id, {
        id: id,
        name: input.name,
        lastname: input.lastname,
        birth_date: input.birth_date,
        role: input.role
      })
      return true
    } catch (err) {
      return false
    }
  }

  async removeFromId(id: string): Promise<boolean> {
    try {
      await this.employeeRepository.delete(id)
      return true
    } catch (err) {
      return false
    }
  }
}
