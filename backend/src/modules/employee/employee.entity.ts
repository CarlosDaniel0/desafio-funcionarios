import { IsDateString, Length } from 'class-validator'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Role } from '../role/role.entity'

@Entity('employee')
export class Employee {
  @PrimaryGeneratedColumn('uuid')
  id: string

  // Nome
  @Length(2, 100, {
    message: 'O Nome deve conter de 2 a 100 caracteres'
  })
  @Column({ length: 250 })
  name: string

  // Sobrenome
  @Length(2, 100, {
    message: 'O Sobrenome deve conter de 2 a 100 caracteres'
  })
  @Column({ length: 250 })
  lastname: string

  // Data de nascimento
  @IsDateString(
    {
      strict: true
    },
    {
      message: 'Digite uma data válida'
    }
  )
  @Column({ type: 'date' })
  birth_date: string

  // Cargo
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ManyToOne(type => Role, role => role.id)
  role: Role
}
