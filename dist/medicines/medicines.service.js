"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicinesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const medicine_entity_1 = require("./entities/medicine.entity");
const typeorm_2 = require("typeorm");
const class_validator_1 = require("class-validator");
let MedicinesService = class MedicinesService {
    constructor(medicineRepository) {
        this.medicineRepository = medicineRepository;
    }
    async create(createMedicineDto) {
        try {
            const medicine = this.medicineRepository.create(createMedicineDto);
            await this.medicineRepository.save(medicine);
            console.log(medicine);
            return medicine;
        }
        catch (error) {
            this.handlerException(error);
        }
    }
    findAll(paginationDto) {
        const { limit = 10, offset = 0 } = paginationDto;
        return this.medicineRepository.find({
            take: limit,
            skip: offset,
            order: { name: 'ASC' },
        });
    }
    async findOne(term) {
        let medicine;
        if ((0, class_validator_1.isUUID)(term)) {
            medicine = await this.medicineRepository.findOneBy({ id: term });
        }
        else {
            const queryBuilder = this.medicineRepository.createQueryBuilder('med');
            medicine = await queryBuilder
                .where('UPPER(name) =:name', {
                name: term.toUpperCase(),
            })
                .getOne();
        }
        if (!medicine)
            throw new common_1.NotFoundException('The Medicine no exist');
        return medicine;
    }
    async update(id, updateMedicineDto) {
        const medicine = await this.medicineRepository.preload({
            id: id,
            ...updateMedicineDto,
        });
        if (!medicine)
            throw new common_1.NotFoundException('The Medicine no exist');
        return this.medicineRepository.save(medicine);
    }
    async remove(id) {
        const medicine = await this.medicineRepository.findOneBy({ id });
        if (!medicine)
            throw new common_1.NotFoundException('The Medicine no exist');
        await this.medicineRepository.remove(medicine);
    }
    handlerException(error) {
        if (error.code === '23500')
            throw new common_1.BadRequestException(error.details);
    }
};
exports.MedicinesService = MedicinesService;
exports.MedicinesService = MedicinesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(medicine_entity_1.Medicine)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MedicinesService);
//# sourceMappingURL=medicines.service.js.map