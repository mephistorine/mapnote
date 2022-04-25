import { Injectable } from '@angular/core';
import { firstValueFrom, Subject, take } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class TagsFilterService {
  public tags: Set<string> = new Set()
  public isInit: Subject<void> = new Subject()

  public isReady: Promise<void> = firstValueFrom(
    this.isInit.pipe(
      take(1)
    )
  )

  constructor() {
  }
}
