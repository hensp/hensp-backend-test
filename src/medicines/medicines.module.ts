import { Module } from '@nestjs/common';
import { MedicinesService } from './medicines.service';
import { MedicinesController } from './medicines.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medicine } from './entities/medicine.entity';

@Module({
  controllers: [MedicinesController],
  providers: [MedicinesService],
  imports: [TypeOrmModule.forFeature([Medicine])],
})
export class MedicinesModule {}
