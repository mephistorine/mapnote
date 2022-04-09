import { Component, forwardRef, OnInit } from "@angular/core"
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms"
import { DomSanitizer } from "@angular/platform-browser"
import snarkdown from "snarkdown"

type EditorTabName = "RAW" | "RESULT"

@Component({
  selector: "mn-md-editor",
  templateUrl: "./md-editor.component.html",
  styleUrls: [ "./md-editor.component.scss" ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MdEditorComponent),
      multi: true
    }
  ]
})
export class MdEditorComponent implements OnInit, ControlValueAccessor {
  public selectedTabName: EditorTabName = "RAW"
  public editorValue: string = ''
  public isDisabled: boolean = false

  constructor(private domSanitizer: DomSanitizer) {
  }

  public onChange(markdownValue: string): void {
  }

  public onTouch(): void {
  }

  public ngOnInit(): void {
  }

  public onClickTabButton(tabName: EditorTabName) {
    this.selectedTabName = tabName
  }

  public convertMarkdownToHtml(markdown: string) {
    return this.domSanitizer.bypassSecurityTrustHtml(snarkdown(markdown))
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouch = fn
  }

  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled
  }

  public writeValue(markdown: string): void {
    this.editorValue = markdown
  }
}
