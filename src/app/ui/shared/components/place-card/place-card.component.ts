import { Component, Input, OnInit } from "@angular/core"
import { FormControl } from "@angular/forms"
import { Place } from "../../../../domain"

@Component({
  selector: "mn-place-card",
  templateUrl: "./place-card.component.html",
  styleUrls: [ "./place-card.component.scss" ],
  host: {
    class: "mn-place-card"
  }
})
export class PlaceCardComponent implements OnInit {

  /*@Input()
  public place: Place*/

  public rating = new FormControl(3)

  constructor() {
  }

  public ngOnInit(): void {
  }

}
