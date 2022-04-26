import {Component, OnInit} from "@angular/core"
import {FormControl, FormGroup, Validators} from "@angular/forms"
import {DialogService} from "../../../../dialog.service"
import {HttpClient} from "@angular/common/http";
import {Coordinates} from "../../../../domain/coordinates";

@Component({
  selector: "mn-place-edit",
  templateUrl: "./place-edit.component.html",
  styleUrls: ["./place-edit.component.scss"]
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
              private httpClient: HttpClient) {
  }

  public ngOnInit(): void {
  }

  public onClickCancelButton(): void {
    this.form.reset()
    this.dialogService.close()
  }

  public onClickSaveButton(): void {
    if (this.form.invalid) {
      alert("Form is not valid")
      return
    }
    const formValue = this.form.value
    const latlng = this.dialogService.isCurrentEditCoordinate
    const coordinates: Coordinates = {
      latitude: latlng.lat,
      longitude: latlng.lng
    }
    this.httpClient.post(`http://localhost:3000/places`, {
      ...formValue,
      coordinates: coordinates
    }).subscribe()
    this.dialogService.close()
  }

}
