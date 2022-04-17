import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms"
import { RatingModule } from "../shared/components/rating/rating.module"
import { TagsModule } from "../shared/components/tags/tags.module"
import { PlaceEditComponent } from './components/place-edit/place-edit.component';
import { MdEditModule} from "../shared/components/md-edit/md-edit.module";

@NgModule({
  declarations: [
    PlaceEditComponent
  ],
  exports: [
    PlaceEditComponent
  ],
    imports: [
        CommonModule,
        RatingModule,
        ReactiveFormsModule,
        TagsModule,
        MdEditModule

    ]
})
export class PlaceEditDialogModule { }
