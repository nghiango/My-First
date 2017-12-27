import { Injectable } from '@angular/core';
import { Item } from '../model/item';

@Injectable()
export class ItemService {
  items: Item[] = []
  constructor() { }

  addItem(item: Item): ItemService {
    this.items.push(item)
    return this
  }

  findAll(): Item[] {
    return this.items;
  }
}
