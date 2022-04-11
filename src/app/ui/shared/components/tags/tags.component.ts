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
  ],
  host: {
    "[class.is-disabled]": "isDisabled",
    "(click)": "onClickAddButton()"
  }
})
export class TagsComponent implements OnInit, ControlValueAccessor {
  public tags: string[] = []
  public newTagNameValue: string | null = null
  public isDisabled: boolean = false

  constructor() {
  }

  public ngOnInit(): void {
  }

  public onChange(tags: string[]): void {
  }

  public onTouch(): void {
  }

  public registerOnChange(fn: (tags: string[]) => void): void {
    this.onChange = fn
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouch = fn
  }

  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled
  }

  public writeValue(tags: string[] | null): void {
    if (tags === null) {
      this.tags = []
      return
    }

    this.tags = tags
  }

  public onClickCloseButton(event: MouseEvent, tagNameToRemove: string): void {
    event.stopPropagation()
    this.tags = this.tags.filter((tagName) => tagName !== tagNameToRemove)
    this.onChange(this.tags)
    this.onTouch()
  }

  public onClickAddButton(): void {
    if (this.newTagNameValue === null || (typeof this.newTagNameValue === "string" && this.newTagNameValue.length <= 0)) {
      return
    }

    this.tags = this.tags.concat(this.newTagNameValue)
    this.newTagNameValue = null
    this.onChange(this.tags)
    this.onTouch()
  }

  public onKeyUpEnter(event: KeyboardEvent): void {
    if (event.key !== "Enter") {
      return
    }

    this.onClickAddButton()
  }
}
