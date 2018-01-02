import { Injectable } from '@angular/core';
import { Item } from '../model/item';

@Injectable()
export class ItemService {

  lastId: number = 0
  items: Item[] = []

  constructor() { }

  findAll(): Item[] {
    return this.items
  }

  findById(id: number): Item {
    return this.items
      .filter(item => item.id === id)
      .pop()
  }

  findByCompleted(completed: boolean):number{
    var finished = 0
    for (let item of this.items) { 
      if(item.completed == completed){
        finished++
      }
    }
    return finished
  }

  addItem(item: Item): ItemService {
    item.id = ++this.lastId;
    this.items.push(item)
    return this
  }

  updateItemById(id: number, values: Object = {}): Item {
    let item = this.findById(id)
    if (!item) {
      return null;
    }
    Object.assign(item, values)
    return item;
  }

  toggleItemCompleted(item): Item {
    let updateItem = this.updateItemById(item.id, item)
    return updateItem;
  }

  deleteTodoById(id: number): ItemService {
    this.items = this.items
      .filter(item => item.id !== id);
    return this;
  }
}
