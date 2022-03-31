import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppComponent } from "./app.component"
import { ShellModule } from "./ui/shell/shell.module"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShellModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
