import { Component, OnInit } from "@angular/core"

@Component({
  selector: "mn-photos-uploader",
  templateUrl: "./photos-uploader.component.html",
  styleUrls: [ "./photos-uploader.component.scss" ]
})
export class PhotosUploaderComponent implements OnInit {
  public readonly inputId: string = Math.random().toString(36).slice(-6)

  constructor() {
  }

  ngOnInit(): void {
  }

}
