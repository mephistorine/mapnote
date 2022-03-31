import { Component, OnInit } from "@angular/core"
import { FormControl } from "@angular/forms"
import { Router } from "@angular/router"

@Component({
  selector: "mn-shell",
  templateUrl: "./shell.component.html",
  styleUrls: [ "./shell.component.scss" ]
})
export class ShellComponent implements OnInit {
  public searchFormControl: FormControl = new FormControl()

  constructor() {
  }

  public ngOnInit(): void {
  }

  public onClickClearButton(): void {
    this.searchFormControl.reset()
  }

  public onClickAddButton(): void {
    // this.router.navigateByUrl("/create")
  }
}
