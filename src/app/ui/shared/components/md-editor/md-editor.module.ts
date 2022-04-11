import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdEditorComponent } from './md-editor.component';
import { FormsModule } from '@angular/forms';

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
