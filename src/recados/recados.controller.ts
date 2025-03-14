import { Controller, Get } from '@nestjs/common';

@Controller('recados')
export class RecadosController {
  @Get()
  findAll(): string {
    return 'Essa rota retorna todos os recados';
  }

  @Get(':id')
  findOne(): string {
    return 'Essa rota retorna UM recado';
  }
}
