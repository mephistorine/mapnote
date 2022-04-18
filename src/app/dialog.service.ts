import { Injectable } from "@angular/core"
import { LatLng } from "leaflet"

@Injectable({
  providedIn: "root"
})
export class DialogService {
  public isShowCreateOrEditDialog: boolean = false
  public isCurrentEditLatLng: LatLng | null = null

  public open(): void {
    this.isShowCreateOrEditDialog = true
  }

  public close(): void {
    this.isShowCreateOrEditDialog = false
  }
}
