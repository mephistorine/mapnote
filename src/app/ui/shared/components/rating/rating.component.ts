import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from "@angular/core"
import { ControlValueAccessor } from "@angular/forms"
import { createValueAccessor } from "../../../../lib"

@Component({
  selector: "mn-rating",
  templateUrl: "./rating.component.html",
  styleUrls: [ "./rating.component.scss" ],
  providers: [ createValueAccessor(() => RatingComponent) ]
})
export class RatingComponent implements OnInit, ControlValueAccessor {
  public stars: boolean[] = new Array(5).fill(false)

  @Input()
  public set starCount(value: number) {
    this.stars = new Array(value).fill(false)
  }

  @Input()
  public readonly: boolean = false

  constructor(private changeDetection: ChangeDetectorRef) {
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
  }

  public writeValue(ratingCount: number): void {
    const newStars: boolean[] = new Array(this.stars.length).fill(false)

    for (let i = 0; i < ratingCount; i++) {
      newStars[ i ] = true
    }

    this.stars = newStars
    this.changeDetection.detectChanges()
  }
}
