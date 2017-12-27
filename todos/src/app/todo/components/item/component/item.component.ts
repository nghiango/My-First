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
  constructor(private itemService:ItemService) { }

  ngOnInit() {
  }
  
  addItem(){
    this.itemService.addItem(this.item);
    this.item = new Item();
  }
  get items(){
    return this.itemService.findAll();
  }
}
