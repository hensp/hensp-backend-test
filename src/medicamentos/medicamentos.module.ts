import { Module } from '@nestjs/common';
import { MedicamentosService } from './medicamentos.service';
import { MedicamentosController } from './medicamentos.controller';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  controllers: [MedicamentosController],
  providers: [MedicamentosService],
  imports: [PrismaModule]
})
export class MedicamentosModule {}
