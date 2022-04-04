import { Component, OnInit } from "@angular/core"
import { FormControl } from "@angular/forms"

@Component({
  selector: "mn-place-edit",
  templateUrl: "./place-edit.component.html",
  styleUrls: [ "./place-edit.component.scss" ]
})
export class PlaceEditComponent implements OnInit {

  public rating: FormControl = new FormControl(3)

  constructor() {
    this.rating.setValue(4)
  }

  ngOnInit(): void {
  }

}
