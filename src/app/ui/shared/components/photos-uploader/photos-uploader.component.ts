import { Component, forwardRef, OnInit } from "@angular/core"
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms"
import { getDataUrlFromImageFile } from "../../../../lib"

@Component({
  selector: "mn-photos-uploader",
  templateUrl: "./photos-uploader.component.html",
  styleUrls: [ "./photos-uploader.component.scss" ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhotosUploaderComponent),
      multi: true
    }
  ]
})
export class PhotosUploaderComponent implements OnInit, ControlValueAccessor {
  public readonly inputId: string = Math.random().toString(36).slice(-6)
  public images: string[] = []
  public isDisabled: boolean = false

  constructor() {
  }

  public ngOnInit(): void {
  }

  public onChangePhotosInput(event: Event): void {
    const target: HTMLInputElement = event.target as HTMLInputElement
    const files: File[] = Array.from(target.files)
    const filesPending: Promise<string>[] = files.map((file) => getDataUrlFromImageFile(file))

    Promise.allSettled(filesPending).then((results) => {
      const imagesAsDataUrl = results
        .filter((r) => r.status === "fulfilled")
        .map((r: PromiseFulfilledResult<string>) => r.value)

      this.images = [ ...this.images, ...imagesAsDataUrl ]
      target.value = null
      this.onChange(this.images)
      this.onTouch()
    })
  }

  public onClickRemoveImageButton(imageIndex: number): void {
    this.images = this.images.filter((_, index) => index !== imageIndex)
  }

  public onChange(value: string[]): void {
  }

  public onTouch(): void {
  }

  public registerOnChange(fn: (value: string[]) => void): void {
    this.onChange = fn
  }

  public registerOnTouched(fn: any): void {
    this.onTouch = fn
  }

  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled
  }

  public writeValue(value: string[]): void {
    if (value === null) {
      return
    }

    this.images = value
  }
}
