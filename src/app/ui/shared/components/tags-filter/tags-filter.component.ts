import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'mn-tags-filter',
  templateUrl: './tags-filter.component.html',
  styleUrls: ['./tags-filter.component.scss']
})
export class TagsFilterComponent implements OnInit {
  @Input()
  public tags: string[] = []
  @Input()
  public selected: string[] = []
  @Output()
  public selectedChanges: EventEmitter<string[]> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  public onClickTagFilter (tagFilter: string): void{
    if (this.isSelectedTag(tagFilter)){
      this.selected = this.selected.filter((tag)=>tag!== tagFilter)
    } else{
      this.selected = this.selected.concat(tagFilter)
    }
this.selectedChanges.emit(this.selected)
}
public isSelectedTag(tagFilter: string): boolean{
    return this.selected.includes(tagFilter)
}
}
