import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppComponent } from "./app.component"
import { PlaceEditDialogModule } from "./ui/place-edit-dialog/place-edit-dialog.module"
import { ShellModule } from "./ui/shell/shell.module"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShellModule,
    PlaceEditDialogModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
