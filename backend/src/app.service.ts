import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'НУ-КА НАХУЙ ОБНОВИШЬСЯ ИЛИ НЕТ?)';
  }
}
