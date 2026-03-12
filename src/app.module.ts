import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { KiteModule } from './kite/kite.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [UsersModule, KiteModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
