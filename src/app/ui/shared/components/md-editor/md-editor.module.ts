import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms"
import { MdEditorComponent } from './md-editor.component';



@NgModule({
  declarations: [
    MdEditorComponent
  ],
  exports: [
    MdEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class MdEditorModule { }
