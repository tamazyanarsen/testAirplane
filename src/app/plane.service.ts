import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaneService {
  items = [
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
  constructor() {}

  addItem(item) {
    this.items.push(item);
  }
  getItems() {
    return this.items;
  }

  changeItem(item) {
    this.items = this.items.map(e => (e.code === item.code ? item : e));
  }

  deleteAllItems() {
    this.items = [];
  }
  deleteItem(item) {
    const index = this.items.findIndex(e => e.code === item.code);
    this.items.splice(index, 1);
  }
}
