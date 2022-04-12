import { Injectable } from "@angular/core"

@Injectable({
  providedIn: "root"
})
export class DialogService {

  public isShowCreateOrEditDialog: boolean = false

  constructor() {
  }
}
