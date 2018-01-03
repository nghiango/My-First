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

  editingName = ''
  editingId = 0
  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  addItem() {
    if (this.item.name == undefined || this.item.name.trim() == "") {
      alert("Please enter your name")
    } else {
      this.itemService.addItem(this.item)
      this.item = new Item()
      this.unfinished++
    }
  }

  turnOnItemEditing(item:Item){
    if(this.editingName != ''){
      alert("Please update your editing!")
    }else{
      this.editingName = item.name
      this.editingId = item.id
    }
  }
  
  turnOffItemEditing(){
    this.editingName = ''
    this.editingId = 0
  }

  updateItem(item:Item){
    item.name = this.editingName
    if (this.editingName == undefined || this.editingName.trim() == "") {
      alert("Please enter your work")
    } else {
      this.itemService.updateItemById(item.id, item)
      this.turnOffItemEditing()
    }
  }

  get items() {
    return this.itemService.findAll()
  }

  toggleItemCompleted(item: Item) {
    item.completed = !item.completed
    this.itemService.toggleItemCompleted(item)
    this.finished = this.itemService.findByCompleted(true)
    this.unfinished = this.itemService.findByCompleted(false)
  }

  deleteItem(item: Item) {
    this.itemService.deleteTodoById(item.id)
  }
}
