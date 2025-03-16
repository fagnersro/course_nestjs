import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('recados')
export class RecadosController {
  @HttpCode(HttpStatus.OK)
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
  create(@Body() body: string) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return {
      id,
      ...body,
    };
  }
}
