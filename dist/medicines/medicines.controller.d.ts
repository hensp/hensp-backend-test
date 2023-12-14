import { MedicinesService } from './medicines.service';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
export declare class MedicinesController {
    private readonly medicinesService;
    constructor(medicinesService: MedicinesService);
    create(createMedicineDto: CreateMedicineDto): Promise<import("./entities/medicine.entity").Medicine>;
    findAll(paginationDto: PaginationDto): Promise<import("./entities/medicine.entity").Medicine[]>;
    findOne(term: string): Promise<import("./entities/medicine.entity").Medicine>;
    update(id: string, updateMedicineDto: UpdateMedicineDto): Promise<import("./entities/medicine.entity").Medicine>;
    remove(id: string): Promise<void>;
}
