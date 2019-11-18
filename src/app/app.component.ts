import { Component } from '@angular/core';
import {Item} from './shared/interfaces/item';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-basic-localstrg';
  newItem: Subject<Item> = new Subject<Item>(); // for item-list update
  editableItem: Item;
  showEditItem = false;
  changedItem: Item;

  newItemAdded($event: Item) {
    console.log('Event', $event);
    this.newItem.next($event); // update item-list with new item
  }

  editItem(item: Item) {
    console.log('APP COMP ITEM', item);
    this.editableItem = item;
    this.showEditItem = true;
  }

  getChangedItem(item: Item) {
    debugger
    this.changedItem = item;
  }
}
