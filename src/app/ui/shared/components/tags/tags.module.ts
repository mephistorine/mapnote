import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { IconModule } from "../icon/icon.module"
import { TagsComponent } from "./tags.component"

@NgModule({
  declarations: [
    TagsComponent
  ],
  exports: [
    TagsComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    FormsModule
  ]
})
export class TagsModule {
}
