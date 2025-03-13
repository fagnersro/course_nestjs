import { Controller } from '@nestjs/common';

@Controller('recados')
export class RecadosController {
  // Encontra todos os recados
  findAll(): string {
    return 'Essa rota retorna todos os recados';
  }

  // Encontra um recado
  findOne(): string {
    return 'Essa rota retorna UM recado';
  }
}
