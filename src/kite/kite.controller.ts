import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { KiteService } from './kite.service';
import { CreateKiteDto } from './dto/create-kite.dto';
import { UpdateKiteDto } from './dto/update-kite.dto';

@Controller('kite')
export class KiteController {
  constructor(private readonly kiteService: KiteService) {}

  @Post()
  create(@Body() createKiteDto: CreateKiteDto) {
    return this.kiteService.create(createKiteDto);
  }

  @Get()
  findAll() {
    return this.kiteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kiteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKiteDto: UpdateKiteDto) {
    return this.kiteService.update(+id, updateKiteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kiteService.remove(+id);
  }
}
