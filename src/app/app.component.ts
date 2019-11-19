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
  newItem: Subject<Item> = new Subject<Item>(); // for item-list update
  editableItem: Item;
  showEditItem = false;
  changedItem: Item;
  items: Item[];

  // @Input() newItem: Subject<Item>;
  // items: Item[];
  // @Output() editableItem = new EventEmitter<Item>();
  // @Input() changedItem;

  constructor() {
    this.items = [];
  }

  ngOnInit(): void {
  }

  newItemAdded(item: Item) {
    // console.log('Event', $event);
    this.items.push({...item, id: this.items.length + 1});
    // this.newItem.next($event); // update item-list with new item
  }

  editItem(item: Item) {
    console.log('APP COMP ITEM', item);
    this.editableItem = item;
    this.showEditItem = true;
  }

  getChangedItem(item: Item) {
    this.changedItem = item;
  }


}
