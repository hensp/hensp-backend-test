import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Medicine } from './entities/medicine.entity';
import { Repository } from 'typeorm';
import { PaginationDto } from '../common/dto/pagination.dto';
import { isUUID } from 'class-validator';

@Injectable()
export class MedicinesService {
  constructor(
    @InjectRepository(Medicine)
    private readonly medicineRepository: Repository<Medicine>,
  ) {}

  async create(createMedicineDto: CreateMedicineDto) {
    try {
      const medicine = this.medicineRepository.create(createMedicineDto);
      await this.medicineRepository.save(medicine);
      console.log(medicine);
      return medicine;
    } catch (error) {
      this.handlerException(error);
    }
  }

  findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;
    return this.medicineRepository.find({
      take: limit,
      skip: offset,
      order: { name: 'ASC' },
    });
  }

  async findOne(term: string) {
    let medicine: Medicine;
    if (isUUID(term)) {
      medicine = await this.medicineRepository.findOneBy({ id: term });
    } else {
      const queryBuilder = this.medicineRepository.createQueryBuilder('med');
      medicine = await queryBuilder
        .where('UPPER(name) =:name', {
          name: term.toUpperCase(),
        })
        .getOne();
    }

    if (!medicine) throw new NotFoundException('The Medicine no exist');

    return medicine;
  }

  async update(id: string, updateMedicineDto: UpdateMedicineDto) {
    const medicine = await this.medicineRepository.preload({
      id: id,
      ...updateMedicineDto,
    });
    if (!medicine) throw new NotFoundException('The Medicine no exist');
    return this.medicineRepository.save(medicine);
  }

  async remove(id: string) {
    const medicine = await this.medicineRepository.findOneBy({ id });
    if (!medicine) throw new NotFoundException('The Medicine no exist');

    await this.medicineRepository.remove(medicine);
  }

  private handlerException(error: any) {
    if (error.code === '23500') throw new BadRequestException(error.details);
  }
}
