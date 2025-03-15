import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('recados')
export class RecadosController {
  @Get()
  findAll(): string {
    return 'Essa rota retorna todos os recados';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id);
    return `Essa rota retorna o ID: ${id}`;
  }

  @Post()
  create() {
    return `Essa rota cria um recado`;
  }
}
