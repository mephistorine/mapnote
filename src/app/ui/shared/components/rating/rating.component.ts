import { Component, forwardRef, Input, OnInit } from "@angular/core"
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms"

@Component({
  selector: "mn-rating",
  templateUrl: "./rating.component.html",
  styleUrls: [ "./rating.component.scss" ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RatingComponent),
      multi: true
    }
  ]
})
export class RatingComponent implements OnInit, ControlValueAccessor {
  public stars: boolean[] = [ false, false, false, false, false ]
  public isDisabled: boolean = false

  @Input()
  public readonly: boolean = false

  constructor() {
  }

  public ngOnInit(): void {
  }

  public updateFormControlValue(ratingCount: number): void {
  }

  public updateFormControlTouchState(): void {
  }

  public registerOnChange(fn: (ratingCount: number) => void): void {
    this.updateFormControlValue = fn
  }

  public registerOnTouched(fn: () => void): void {
    this.updateFormControlTouchState = fn
  }

  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled
  }

  public writeValue(ratingCount: number) {
    const newStars: boolean[] = new Array(this.stars.length).fill(false)

    for (let i = 0; i < ratingCount; i++) {
      newStars[ i ] = true
    }

    this.stars = newStars
  }

  public onClickStar(index: number): void {
    const newStars: boolean[] = new Array(this.stars.length).fill(false)

    for (let i = 0; i < newStars.length; i++) {
      newStars[ i ] = true

      if (i === index) {
        break
      }
    }

    this.stars = newStars
    this.updateFormControlTouchState()
    this.updateFormControlValue(this.stars.filter(isSelected => isSelected).length)
  }
}
