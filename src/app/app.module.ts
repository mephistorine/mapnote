import { HttpClientModule } from "@angular/common/http"
import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppComponent } from "./app.component"
import { PlaceEditDialogModule } from "./ui/place-edit-dialog/place-edit-dialog.module"
import { API_SERVER_PATH } from "./ui/shared/tokens"
import { ShellModule } from "./ui/shell/shell.module"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShellModule,
    PlaceEditDialogModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: API_SERVER_PATH,
      useValue: "http://localhost:3000"
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
