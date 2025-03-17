import { Injectable } from '@nestjs/common';
import type { Recado } from './entities/recado.entity';

@Injectable()
export class RecadosService {
  private lastId = 1;
  private recados: Recado[] = [
    {
      id: 1,
      texto: 'Esse é um recado de teste',
      de: 'Joana',
      para: 'João',
      lido: false,
      data: new Date(),
    },
  ];

  findAll() {
    return this.recados;
  }

  findOne(id: string) {
    return this.recados.find((item) => item.id === +id);
  }

  create(body: any) {
    this.lastId++;
    const id = this.lastId;
    const newRecado = {
      id,
      ...body,
    };
    this.recados.push(newRecado);

    return newRecado;
  }

  update(id: any, body: any) {
    const recadoExistenteIndex = this.recados.findIndex(
      (item) => item.id === +id,
    );

    if (recadoExistenteIndex >= 0) {
      const recadoExistente = this.recados[recadoExistenteIndex];

      this.recados[recadoExistenteIndex] = {
        ...recadoExistente,
        ...body,
      };
      return recadoExistente;
    }
  }

  remove(id: any) {
    const recadoExistenteIndex = this.recados.findIndex(
      (item) => item.id === +id,
    );

    if (recadoExistenteIndex >= 0) {
      this.recados.splice(recadoExistenteIndex, 1);
    }
  }
}
