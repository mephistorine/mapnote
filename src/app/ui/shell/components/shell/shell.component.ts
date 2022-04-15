import { Component, OnInit } from "@angular/core"
import { FormControl } from "@angular/forms"
import { LeafletMouseEvent } from "leaflet"
import { DialogService } from "../../../../dialog.service"
import { MapService } from "../../../../map.service"

@Component({
  selector: "mn-shell",
  templateUrl: "./shell.component.html",
  styleUrls: [ "./shell.component.scss" ]
})
export class ShellComponent implements OnInit {
  public isShowAddButton: boolean = false
  public searchFormControl: FormControl = new FormControl()

  constructor(private mapService: MapService,
              private dialogService: DialogService) {
  }

  public ngOnInit(): void {
    this.mapService.isReady.then((map) => {
      map.addEventListener("click", (event: LeafletMouseEvent) => {
        this.isShowAddButton = true
        this.dialogService.isCurrentEditLatLng = event.latlng
      })
    })
  }

  public onClickClearButton(): void {
    this.searchFormControl.reset()
  }

  public onClickAddButton(): void {
    this.dialogService.isShowCreateOrEditDialog = true
  }
}
