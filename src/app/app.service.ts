import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  exampleSolucition(): string {
    return 'Example use service.';
  }
}
