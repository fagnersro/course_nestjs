import { Module } from '@nestjs/common';

import { RecadosModule } from 'src/recados/recados.module';

@Module({
  imports: [RecadosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
