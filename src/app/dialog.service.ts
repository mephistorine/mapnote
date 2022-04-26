import { Injectable } from "@angular/core"
import {LatLng} from "leaflet";

@Injectable({
  providedIn: "root"
})
export class DialogService extends EventTarget{

  public isShowCreateOrEditDialog: boolean = false
  public isCurrentEditCoordinate: LatLng | null = null

  public close(): void{
    this.isShowCreateOrEditDialog = false

  }
  public open(): void{
    this.isShowCreateOrEditDialog = true

  }
}
