import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from './shared/interfaces/item';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ang-basic-localstrg';
  editableItem: Item;
  showEditItem = false;
  changedItem: Item;
  items: Item[];

  constructor() {
    this.items = [];
  }

  ngOnInit(): void {
  }

  newItemAdded(item: Item) {
    this.items.push({...item, id: this.items.length + 1});
  }

  editItem(item: Item) {
    console.log('APP COMP ITEM', item);
    this.editableItem = item;
    this.showEditItem = true;
  }

  getChangedItem(item: Item) {
    this.changedItem = item;
    const replacedItemId = this.findUpdateItem(item);
    this.items[replacedItemId] = item;
  }

  findUpdateItem(item: Item) {
    return this.items.findIndex(itm => itm.id === item.id);
  }

  trackByFn(index: number, item: Item) {
   // console.log(item.id);
    return item.id;
  }


  deleteItem(item: Item) {
    const deletedItemId = this.findUpdateItem(item);
    this.items.splice(deletedItemId);
  }
}
