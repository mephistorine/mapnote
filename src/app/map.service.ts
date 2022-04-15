import { Injectable } from "@angular/core"
import { BehaviorSubject, filter, firstValueFrom } from "rxjs"
import { LeafletMap } from "./lib"

@Injectable({
  providedIn: "root"
})
export class MapService {
  private map: BehaviorSubject<LeafletMap | null> = new BehaviorSubject(null)

  public isReady: Promise<LeafletMap> = firstValueFrom(
    this.map.pipe(
      filter((value) => value !== null)
    )
  )

  constructor() {
  }

  public setLeafletMap(map: LeafletMap | null): void {
    this.map.next(map)
  }

  public getLeafletMap(): LeafletMap | null {
    return this.map.value
  }
}
