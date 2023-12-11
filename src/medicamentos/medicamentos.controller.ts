import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedicamentosService } from './medicamentos.service';
import { CreateMedicamentoDto } from './dto/create-medicamento.dto';
import { UpdateMedicamentoDto } from './dto/update-medicamento.dto';

@Controller('medicamentos')
export class MedicamentosController {
  constructor(private readonly medicamentosService: MedicamentosService) { }

  // Endpoint para crear un nuevo medicamento
  @Post()
  create(@Body() createMedicamentoDto: CreateMedicamentoDto) {
    return this.medicamentosService.create(createMedicamentoDto);
  }

  // Endpoint para obtener todos los medicamentos
  @Get()
  findAll() {
    return this.medicamentosService.findAll();
  }

  // Endpoint para obtener un medicamento por ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicamentosService.findOne(+id);
  }

  // Endpoint para actualizar un medicamento por ID
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedicamentosDto: UpdateMedicamentoDto) {
    return this.medicamentosService.update(+id, updateMedicamentosDto);
  }

  // Endpoint para eliminar un medicamento por ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicamentosService.remove(+id);
  }

}
