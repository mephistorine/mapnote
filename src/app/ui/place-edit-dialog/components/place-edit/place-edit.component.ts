import { Component, OnInit } from "@angular/core"
import { FormControl, FormGroup, Validators } from "@angular/forms"
import { DialogService } from "../../../../dialog.service"
import { Coordinates } from "../../../../domain/coordinates"
import { PlaceService } from "../../../shared/api/place.service"

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
    tags: new FormControl([]),
    photos: new FormControl([])
  })

  constructor(private dialogService: DialogService,
              public placeService: PlaceService) {
  }

  public ngOnInit(): void {
  }

  public onClickCancelButton(): void {
    this.form.reset()
    this.dialogService.close()
  }

  public onClickSaveButton(): void {
    if (this.form.invalid) {
      alert("Форма не валидна")
      return
    }

    const formValue = this.form.value
    const latlng = this.dialogService.isCurrentEditLatLng
    const coordinates: Coordinates = {
      latitude: latlng.lat,
      longitude: latlng.lng
    }

    this.placeService.create({ ...formValue, coordinates: coordinates })
        .then(() => {
          alert("Все хорошо")
        })
        .catch((error) => {
          alert("Все плохо")
          console.error(error)
        })
    this.dialogService.close()
  }
}
