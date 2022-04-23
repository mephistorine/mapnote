import { Component, OnInit } from "@angular/core"
import { FormControl } from "@angular/forms"
import { LeafletMouseEvent } from "leaflet"
import { DialogService } from "../../../../dialog.service"
import { MapService } from "../../../../map.service"
import { PlaceCardControllerService } from "../../../../place-card-controller.service"

@Component({
  selector: "mn-shell",
  templateUrl: "./shell.component.html",
  styleUrls: [ "./shell.component.scss" ]
})
export class ShellComponent implements OnInit {
  public isShowAddButton: boolean = false
  public searchFormControl: FormControl = new FormControl()
  private addButtonLifeTimerId: number | null = null

  constructor(private mapService: MapService,
              private dialogService: DialogService,
              public placeCardController: PlaceCardControllerService) {
  }

  public ngOnInit(): void {
    this.mapService.isReady.then((map) => {
      map.addEventListener("click", (event: LeafletMouseEvent) => {
        this.isShowAddButton = true

        if (this.addButtonLifeTimerId !== null) {
          clearTimeout(this.addButtonLifeTimerId)
        }

        this.addButtonLifeTimerId = setTimeout(() => {
          this.isShowAddButton = false
        }, 5000)

        this.dialogService.isCurrentEditLatLng = event.latlng
      })
    })
  }

  public onClickClearButton(): void {
    this.searchFormControl.reset()
  }

  public onClickAddButton(): void {
    this.dialogService.open()
    this.isShowAddButton = false
    clearTimeout(this.addButtonLifeTimerId)
  }

  public onClosePlaceCard(): void {
    this.placeCardController.close()
  }
}
