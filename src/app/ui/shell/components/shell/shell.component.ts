import { Component, OnInit } from "@angular/core"
import { FormControl } from "@angular/forms"
import { MapService } from "../../../../map.service"

@Component({
  selector: "mn-shell",
  templateUrl: "./shell.component.html",
  styleUrls: [ "./shell.component.scss" ]
})
export class ShellComponent implements OnInit {
  public isShowAddButton: boolean = false
  public searchFormControl: FormControl = new FormControl()

  constructor(private mapService: MapService) {
  }

  public ngOnInit(): void {
    this.mapService.isReady.then((map) => {
      map.addEventListener("click", (event) => {
        this.isShowAddButton = true
      })

      map.addEventListener("blur", () => {
        this.isShowAddButton = false
      })
    })
  }

  public onClickClearButton(): void {
    this.searchFormControl.reset()
  }

  public onClickAddButton(): void {
  }
}
