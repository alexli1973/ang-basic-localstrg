import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Item} from '../../shared/interfaces/item';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {
  formItem: FormGroup;
  showFormNewIem = false;
  @Output() newItemAdded = new EventEmitter<Item>();

  constructor() { }

  ngOnInit() {
    this.formItem = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(4)]),
      description: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required)
    });
  }

  get title() {
    return this.formItem.get('title');
  }

  submit() {
    const itemForm = {...this.formItem.value};
    this.formItem.reset();
    console.log({...itemForm});
    this.newItemAdded.emit(itemForm);
    this.showFormNewIem = false;
  }

  openFormNewItem() {
    this.showFormNewIem = !this.showFormNewIem;
  }

  cancelNewItem() {
    this.formItem.reset();
    this.showFormNewIem = false;
  }
}
