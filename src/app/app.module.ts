import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemCreateComponent } from './items/item-create/item-create.component';
import { ItemListComponent } from './items/item-list/item-list.component';
import { ItemEditComponent } from './items/item-edit/item-edit.component';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ItemCreateComponent,
    ItemListComponent,
    ItemEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
