import { Component, forwardRef, OnInit } from "@angular/core"
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms"

@Component({
  selector: "mn-tags",
  templateUrl: "./tags.component.html",
  styleUrls: [ "./tags.component.scss" ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TagsComponent),
      multi: true
    }
  ]
})
export class TagsComponent implements OnInit, ControlValueAccessor {
  public tags: string[] = []

  constructor() {
  }

  public ngOnInit(): void {
  }

  public registerOnChange(fn: (tags: string[]) => void): void {
  }

  public registerOnTouched(fn: () => void): void {
  }

  public setDisabledState(isDisabled: boolean): void {
  }

  public writeValue(tags: string[]): void {
    this.tags = tags
  }
}
