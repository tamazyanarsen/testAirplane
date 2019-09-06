import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const items = [
      {
        code: 1,
        type: 'dsf',
        number: 135,
        model: 'sdfsdf',
        date: new Date().getDate()
      },
      {
        code: 2,
        type: 'dsf23123',
        number: 1353424,
        model: '34sdfsdf',
        date: new Date().getDate()
      }
    ];
    return { items };
  }
}
