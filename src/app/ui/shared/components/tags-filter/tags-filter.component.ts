import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core"

@Component({
  selector: "mn-tags-filter",
  templateUrl: "./tags-filter.component.html",
  styleUrls: [ "./tags-filter.component.scss" ]
})
export class TagsFilterComponent implements OnInit {

  @Input()
  public tags: string[] = []

  @Input()
  public selected: string[] = []

  @Output()
  public selectedChanges: EventEmitter<string[]> = new EventEmitter()

  constructor() {
  }

  ngOnInit(): void {
  }

  public onClickTagButton(tagName: string): void {
    if (this.isTagActive(tagName)) {
      this.selected = this.selected.filter((tag) => tag !== tagName)
    } else {
      this.selected = this.selected.concat(tagName)
    }

    this.selectedChanges.emit(this.selected)
  }

  public isTagActive(tagName: string): boolean {
    return this.selected.includes(tagName)
  }

}
