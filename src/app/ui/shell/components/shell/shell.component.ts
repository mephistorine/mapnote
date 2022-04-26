import { Component, OnInit } from "@angular/core"
import { FormControl } from "@angular/forms"
import { MapService } from "../../../../map.service"
import {DialogService} from "../../../../dialog.service";
import {LeafletMouseEvent} from "leaflet";

@Component({
  selector: "mn-shell",
  templateUrl: "./shell.component.html",
  styleUrls: [ "./shell.component.scss" ]
})
export class ShellComponent implements OnInit {
  public isShowAddButton: boolean = false
  public searchFormControl: FormControl = new FormControl()
  public addButtonLifeTimer: number| null= null
  constructor(private mapService: MapService,
  private  dialogService: DialogService) {

  }

  public ngOnInit(): void {
    this.mapService.isReady.then((map) => {
      map.addEventListener("click", (event: LeafletMouseEvent) => {
        this.isShowAddButton = true
        if (this.addButtonLifeTimer!== null){
          clearTimeout(this.addButtonLifeTimer)
        }
        this.addButtonLifeTimer = setTimeout(()=>{
          this.isShowAddButton = false
          },10000
        )
        this.dialogService.isCurrentEditCoordinate = event.latlng

      })

      // map.addEventListener("blur", () => {
      //   this.isShowAddButton = false
      // })
    })
  }

  public onClickClearButton(): void {
    this.searchFormControl.reset()
  }

  public onClickAddButton(): void {
    this.dialogService.open()
    this.isShowAddButton = false
clearTimeout(this.addButtonLifeTimer)
  }
}
