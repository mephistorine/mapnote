import { Component, OnInit } from "@angular/core"
import { FormControl, FormGroup, Validators } from "@angular/forms"

@Component({
  selector: "mn-place-edit",
  templateUrl: "./place-edit.component.html",
  styleUrls: [ "./place-edit.component.scss" ]
})
export class PlaceEditComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    name: new FormControl(),
    rating: new FormControl(0, Validators.min(1)),
    description: new FormControl(),
    tags: new FormControl([ "Паб", "Бар", "Гастропаб", "Ресторан" ]),
    photos: new FormControl()
  })

  constructor() {
  }

  ngOnInit(): void {
  }
}
