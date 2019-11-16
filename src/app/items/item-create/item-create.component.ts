import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {
  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(4)]),
      descriptionItem: new FormControl(null, Validators.required),
      priceItem: new FormControl(null, Validators.required)
    });
  }

  get title() {
    return this.form.get('title');
  }

  submit() {
    const itemForm = {...this.form.value};
    console.log(itemForm.titleItem);
  }
}
