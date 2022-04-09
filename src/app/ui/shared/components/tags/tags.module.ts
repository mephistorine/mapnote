import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { TagsComponent } from "./tags.component"

@NgModule({
  declarations: [
    TagsComponent
  ],
  exports: [
    TagsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TagsModule {
}
