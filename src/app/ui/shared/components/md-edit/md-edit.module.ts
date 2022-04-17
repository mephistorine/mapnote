import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdEditComponent } from './md-edit.component';
import { FormsModule } from "@angular/forms"
import {MarkdownModule} from "ngx-markdown";


@NgModule({
  declarations: [
    MdEditComponent
  ],
  exports: [
    MdEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MarkdownModule.forChild(),
  ]
})
export class MdEditModule { }
