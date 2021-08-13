import { IsNumber, Length, Min } from 'class-validator'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('role')
export class Role {
  @PrimaryGeneratedColumn('uuid')
  id: string

  // Nome do Cargo (Ex: Auxiliar Administrativo)
  @Length(2, 100, {
    message: 'O Nome do cargo deve conter de 2 a 100 caracteres'
  })
  @Column({ length: 250 })
  name: string

  // Salário
  @IsNumber(
    {
      maxDecimalPlaces: 2
    },
    {
      message: 'Digite um valor válido (Ex: 2451.98)'
    }
  )
  @Min(1100, {
    message: 'Valor abaixo do salário mínimo!'
  })
  @Column({ type: 'float' })
  wage: number

  // Descrição (Ex: Atua na área de escritório)
  @Length(2, 100, {
    message: 'A descrição deve conter de 2 a 100 caracteres'
  })
  @Column({ length: 250 })
  description: string
}
