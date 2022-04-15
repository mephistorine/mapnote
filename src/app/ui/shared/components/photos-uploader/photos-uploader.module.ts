import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from "../icon/icon.module"
import { PhotosUploaderComponent } from './photos-uploader.component';



@NgModule({
  declarations: [
    PhotosUploaderComponent
  ],
  exports: [
    PhotosUploaderComponent
  ],
  imports: [
    CommonModule,
    IconModule
  ]
})
export class PhotosUploaderModule { }
