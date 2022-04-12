import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosUploaderComponent } from './photos-uploader.component';



@NgModule({
  declarations: [
    PhotosUploaderComponent
  ],
  exports: [
    PhotosUploaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PhotosUploaderModule { }
