import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from '../../shared/interfaces/item';
import {BehaviorSubject, Subject} from 'rxjs';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  @Input() newItem: Subject<Item>;
  items: Item[];
  @Output() editableItem = new EventEmitter<Item>();
  @Input() changedItem;

  constructor() {
    this.items = [];
  }

  ngOnInit() {
    // subscribe to new item from app component
    this.newItem.subscribe(item => {
      this.items.push({...item, id: this.items.length + 1});
    });
    this.changedItem.subscribe(item => {
      debugger
      alert(item)
    });
  }

  editItem(item: Item) {
    this.editableItem.emit(item);
    console.log(item);
  }

  replaceItemById(item) {
    debugger;
    this.items.find(newItm => {
      return newItm.id === item.id;
    });
  }
}
