import { Module } from '@nestjs/common'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from './shared/config/config.module'
import { ConfigService } from './shared/config/config.service'

// TypeORM DB Configuration
const ConfiguredTypeOrmModule = TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => {
    const ormconfigs: TypeOrmModuleOptions = {
      type: 'postgres',
      host: configService.get('DB_HOST'),
      port: configService.getNumber('DB_PORT'),
      username: configService.get('DB_USERNAME'),
      password: configService.get('DB_PASSWORD'),
      database: configService.get('DB_DATABASE_NAME'),
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      // synchronize: process.env.NODE_ENV === 'development',
      // TODO : After development, Set sync false.
      synchronize: true,
      logging: process.env.NODE_ENV === 'development',
      extra: {
        min: 1, // minimum connection pools
        max: 20, // maximum connection pools
        keepAlive: true,
        idleTimeoutMillis: 0,
        connectionTimeoutMillis: 0,
      },
    }
    return ormconfigs
  },
  inject: [ConfigService],
})

@Module({
  imports: [ConfigModule, ConfiguredTypeOrmModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}