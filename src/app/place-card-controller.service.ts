import { Injectable } from '@angular/core'
import { Place } from "./domain"

@Injectable({
  providedIn: 'root'
})
export class PlaceCardControllerService {
  public currentOpenedPlace: Place | null = null

  constructor() { }

  public open(place: Place): void {
    this.currentOpenedPlace = place
  }

  public close(): void {
    this.currentOpenedPlace = null
  }
}
