import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceEditComponent } from './components/place-edit/place-edit.component';



@NgModule({
  declarations: [
    PlaceEditComponent
  ],
  exports: [
    PlaceEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PlaceEditDialogModule { }
