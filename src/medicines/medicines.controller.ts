import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedicinesService } from './medicines.service';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/common/enum/rol.enum';
import { ApiBearerAuth, ApiCreatedResponse, ApiForbiddenResponse, ApiParam, ApiSecurity, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';

@ApiSecurity('Medicamentos')
@ApiUnauthorizedResponse({
  description:'Unauthorized Bearer Auth',
})
@ApiTags('Medicamentos')
@ApiBearerAuth()
@Controller('medicines')
@Auth(Role.ADMIN)
export class MedicinesController {
  constructor(private readonly medicinesService: MedicinesService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  create(@Body() createMedicineDto: CreateMedicineDto) {
    return this.medicinesService.create(createMedicineDto);
  }
  @Auth(Role.USER)
  @Get()
  findAll() {
    return this.medicinesService.findAll();
  }
  @Auth(Role.USER)
  @ApiParam({ name: 'id', description: 'ID del recurso' })
  @Get(':id')
  findByNameOrId(@Param('id') id: string|number) {
    return this.medicinesService.findByNameOrId(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateMedicineDto: UpdateMedicineDto) {
    return this.medicinesService.update(+id, updateMedicineDto);
  }


  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.medicinesService.remove(+id);
  }
}
