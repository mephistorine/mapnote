import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagsFilterComponent } from './tags-filter.component';



@NgModule({
  declarations: [
    TagsFilterComponent
  ],
  exports: [
    TagsFilterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TagsFilterModule { }
