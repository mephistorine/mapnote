import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdEditComponent } from './md-edit.component';



@NgModule({
  declarations: [
    MdEditComponent
  ],
  exports: [
    MdEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MdEditModule { }
