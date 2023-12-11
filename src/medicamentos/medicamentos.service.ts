import { Injectable } from '@nestjs/common';
import { CreateMedicamentoDto } from './dto/create-medicamento.dto';
import { UpdateMedicamentoDto } from './dto/update-medicamento.dto';
import { PrismaService } from './prisma/prisma.service';
import { Medicamentos } from '@prisma/client';

@Injectable()
export class MedicamentosService {
  constructor(private prisma: PrismaService) { }

  // Método para crear un nuevo medicamento
  async create(data: CreateMedicamentoDto): Promise<Medicamentos> {
    return this.prisma.medicamentos.create({ data, });
  }

  // Método para obtener todos los medicamentos
  async findAll(): Promise<Medicamentos[]> {
    return this.prisma.medicamentos.findMany();
  }

  // Método para obtener un medicamento por ID
  async findOne(id: number): Promise<Medicamentos> {
    return this.prisma.medicamentos.findUnique({
      where: { id: id },
    });
  }

  // Método para actualizar un medicamento por ID
  async update(id: number, data: UpdateMedicamentoDto) {
    return this.prisma.medicamentos.update({ where: { id: id }, data });
  }

  // Método para eliminar un medicamento por ID
  async remove(id: number): Promise<Medicamentos> {
    return this.prisma.medicamentos.delete({ where: { id: id, }, });
  }
  
}
