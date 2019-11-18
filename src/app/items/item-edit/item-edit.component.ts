import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from '../../shared/interfaces/item';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
  @Input() editableItem: Item;
  @Output() changedItem = new EventEmitter<Item>();
  formEdit: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formEdit = new FormGroup({
      title: new FormControl(this.editableItem.title, [Validators.required, Validators.minLength(4)]),
      description: new FormControl(this.editableItem.description, Validators.required),
      price: new FormControl(this.editableItem.price, Validators.required)
    });
  }

  get title() {
    return this.formEdit.get('title');
  }

  submit() {
    this.changedItem.emit({...this.formEdit.value, id: this.editableItem.id});
    debugger;
    this.formEdit.reset();
    this.editableItem = null;
    console.log({...this.changedItem});
  }

  cancelEditItem() {
     this.editableItem = null;
  }
}
