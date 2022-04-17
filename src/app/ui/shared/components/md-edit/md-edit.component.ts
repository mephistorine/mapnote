import {Component, OnInit} from '@angular/core';
import {ControlValueAccessor} from "@angular/forms";
import { MarkdownService } from 'ngx-markdown';
import { DomSanitizer } from "@angular/platform-browser"
type EditorTabName = "CONTENT" | "RESULT"

@Component({
  selector: 'mn-md-edit',
  templateUrl: './md-edit.component.html',
  styleUrls: ['./md-edit.component.scss']
})
export class MdEditComponent implements OnInit, ControlValueAccessor {
  public selectedTabName: EditorTabName = "CONTENT"
  public editorValue: string = ''
    //public markdownService: MarkdownService
  constructor(private domSanitizer: DomSanitizer,public markdownService: MarkdownService) {
  }

  ngOnInit(): void {
  }

  public onClickTabButton(tabName: EditorTabName) {
    this.selectedTabName = tabName
  }
  public convertMarkdownToHtml(markdown: string) {

    return this.domSanitizer.bypassSecurityTrustHtml(this.markdownService.compile(markdown))
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
  }
}
