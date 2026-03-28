import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST ?? 'localhost',
      port: parseInt(process.env.DB_PORT ?? '5432'),
      username: process.env.DB_USERNAME ?? 'postgres',
      password: process.env.DB_PASSWORD ?? 'root',
      database: process.env.DB_NAME ?? 'tradingdb',
      autoLoadEntities: true,
      logger: 'advanced-console',
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
