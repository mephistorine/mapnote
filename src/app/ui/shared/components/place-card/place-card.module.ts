import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms"
import { IconModule } from "../icon/icon.module"
import { RatingModule } from "../rating/rating.module"
import { PlaceCardComponent } from './place-card.component';



@NgModule({
  declarations: [
    PlaceCardComponent
  ],
  exports: [
    PlaceCardComponent
  ],
  imports: [
    CommonModule,
    RatingModule,
    ReactiveFormsModule,
    IconModule
  ]
})
export class PlaceCardModule { }
