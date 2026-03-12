import { PartialType } from '@nestjs/mapped-types';
import { CreateKiteDto } from './create-kite.dto';

export class UpdateKiteDto extends PartialType(CreateKiteDto) {}
