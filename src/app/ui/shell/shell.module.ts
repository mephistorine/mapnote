import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { ReactiveFormsModule } from "@angular/forms"
import { IconModule } from "../shared/components/icon/icon.module"
import { PlaceCardModule } from "../shared/components/place-card/place-card.module"
import { TagsFilterModule } from "../shared/components/tags-filter/tags-filter.module"
import { ShellComponent } from "./components/shell/shell.component"

@NgModule({
  declarations: [
    ShellComponent
  ],
  exports: [
    ShellComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IconModule,
    PlaceCardModule,
    TagsFilterModule
  ]
})
export class ShellModule {
}
