import { Module } from '@nestjs/common';
import { KiteService } from './kite.service';
import { KiteController } from './kite.controller';

@Module({
  controllers: [KiteController],
  providers: [KiteService],
})
export class KiteModule {}
