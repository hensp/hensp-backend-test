import { Injectable } from '@nestjs/common';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';
import { Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Medicine } from './entities/medicine.entity';

@Injectable()
export class MedicinesService {

  constructor(
    @InjectRepository(Medicine)
    private readonly medicineRepository: Repository<Medicine>
  ){}


  async create(createMedicineDto: CreateMedicineDto) {
    return await this.medicineRepository.save({
      ...createMedicineDto,

    });
  }

  async findAll() {
    return await this.medicineRepository.find();
  }

  async findByNameOrId(nameOrId: string | number) {
    const id = Number(nameOrId);
    if (!isNaN(id)) {
        // Si nameOrId puede ser convertido a un número, buscar por ID
        return await this.medicineRepository.findOne({ where: { id: id } });
    } else {
        // Si nameOrId no puede ser convertido a un número, buscar por nombre
        return await this.medicineRepository.findOne({ where: { name: Like(`%${nameOrId}%`) } });
    }
}

  async update(id: number, updateMedicineDto: UpdateMedicineDto) {
    return await this.medicineRepository.update(id, updateMedicineDto);
  }

  async remove(id: number) {
    return await this.medicineRepository.softDelete({ id });

  }
}
