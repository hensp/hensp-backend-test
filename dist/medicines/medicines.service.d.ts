import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';
import { Medicine } from './entities/medicine.entity';
import { Repository } from 'typeorm';
import { PaginationDto } from '../common/dto/pagination.dto';
export declare class MedicinesService {
    private readonly medicineRepository;
    constructor(medicineRepository: Repository<Medicine>);
    create(createMedicineDto: CreateMedicineDto): Promise<Medicine>;
    findAll(paginationDto: PaginationDto): Promise<Medicine[]>;
    findOne(term: string): Promise<Medicine>;
    update(id: string, updateMedicineDto: UpdateMedicineDto): Promise<Medicine>;
    remove(id: string): Promise<void>;
    private handlerException;
}
