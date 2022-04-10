import { Component, OnInit } from "@angular/core"
import { ControlValueAccessor } from "@angular/forms"
import { DomSanitizer } from "@angular/platform-browser"
import snarkdown from "snarkdown"

type EditorTabName = "RAW" | "RESULT"

@Component({
  selector: "mn-md-editor",
  templateUrl: "./md-editor.component.html",
  styleUrls: [ "./md-editor.component.scss" ]
})
export class MdEditorComponent implements OnInit, ControlValueAccessor {
  public selectedTabName: EditorTabName = "RAW"
  public editorValue: string = ''

  constructor(private domSanitizer: DomSanitizer) {
  }

  public ngOnInit(): void {
  }

  public onClickTabButton(tabName: EditorTabName) {
    this.selectedTabName = tabName
  }

  public convertMarkdownToHtml(markdown: string) {
    return this.domSanitizer.bypassSecurityTrustHtml(snarkdown(markdown))
  }

  public registerOnChange(fn: any): void {
  }

  public registerOnTouched(fn: any): void {
  }

  public setDisabledState(isDisabled: boolean): void {
  }

  public writeValue(obj: any): void {
  }
}
