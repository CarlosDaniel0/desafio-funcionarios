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
        type: 'mysql',
        host: `${configService.get('HOST')}`,
        port: configService.get('PORT'),
        username: configService.get('USERNAME'),
        password: `${configService.get('PASSWORD')}`,
        database: `${configService.get('DATABASE')}`,
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
