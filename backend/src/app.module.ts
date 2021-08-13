import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { RoleModule } from './modules/role/role.module'
import { EmployeeModule } from './modules/employee/employee.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get('DATABASE_URL'),
        synchronize: true,
        autoLoadEntities: true
        // logging: true
      })
    }),
    EmployeeModule,
    RoleModule
  ]
})
export class AppModule {}
