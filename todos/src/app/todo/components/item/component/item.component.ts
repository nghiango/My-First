import { Component, OnInit } from '@angular/core';
import { Item } from '../model/item';
import { ItemService } from '../service/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  item = new Item();
  finished = 0
  unfinished = 0
  editName = ''
  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  addItem() {
    if (this.item.name == undefined || this.item.name.trim() == "") {
      alert("Please enter your name");
      return;
    } else {
      this.itemService.addItem(this.item);
      this.item = new Item();
      this.unfinished++;
    }
  }

  editItem(item:Item){
    if(this.editName != ''){
      alert("Please update your editing!");
    }else{
      item.editing = true;
      this.editName = item.name
    }
  }

  updateItem(item:Item){
    item.name = this.editName;
    item.editing = false;
    if (this.editName == undefined || this.editName.trim() == "") {
      alert("Please enter your work");
      return;
    } else {
      this.itemService.updateItemById(this.item.id, item);
      this.editName = ''
    }
  }

  get items() {
    return this.itemService.findAll();
  }

  toggleItemCompleted(item: Item) {
    this.itemService.toggleItemCompleted(item);
    this.finished = this.itemService.findByCompleted(true);
    this.unfinished = this.itemService.findByCompleted(false);
  }

  deleteItem(item: Item) {
    this.itemService.deleteTodoById(item.id);
  }
}
