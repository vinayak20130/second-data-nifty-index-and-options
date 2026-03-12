import { Injectable } from '@nestjs/common';
import { CreateKiteDto } from './dto/create-kite.dto';
import { UpdateKiteDto } from './dto/update-kite.dto';

@Injectable()
export class KiteService {
  create(createKiteDto: CreateKiteDto) {
    return 'This action adds a new kite';
  }

  findAll() {
    return `This action returns all kite`;
  }

  findOne(id: number) {
    return `This action returns a #${id} kite`;
  }

  update(id: number, updateKiteDto: UpdateKiteDto) {
    return `This action updates a #${id} kite`;
  }

  remove(id: number) {
    return `This action removes a #${id} kite`;
  }
}
