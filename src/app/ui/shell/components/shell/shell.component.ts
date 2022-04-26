import { Component, OnInit } from "@angular/core"
import { FormControl } from "@angular/forms"
import { LeafletMouseEvent, Marker } from "leaflet"
import { DialogService } from "../../../../dialog.service"
import { Place } from "../../../../domain"
import { LeafletMap } from "../../../../lib"
import { MapService } from "../../../../map.service"
import { PlaceCardControllerService } from "../../../../place-card-controller.service"
import { TagsFilterService } from "../../../../tags-filter.service"

@Component({
  selector: "mn-shell",
  templateUrl: "./shell.component.html",
  styleUrls: [ "./shell.component.scss" ],
  host: {
    "[class.is-expanded]": "isExpanded"
  },
})
export class ShellComponent implements OnInit {
  public isExpanded: boolean = false

  public isShowAddButton: boolean = false
  public searchFormControl: FormControl = new FormControl(null)
  private addButtonLifeTimerId: number | null = null
  public tags: Promise<string[]> = this.tagsFilterService.isReady.then(() => Array.from(this.tagsFilterService.tags))

  public places: Promise<Place[]> = this.tagsFilterService.isReady.then(() => Array.from(this.mapService.markers.keys()))

  public selectedTags: string[] = []

  constructor(private mapService: MapService,
              private dialogService: DialogService,
              public placeCardController: PlaceCardControllerService,
              private tagsFilterService: TagsFilterService) {
    this.searchFormControl.valueChanges.subscribe(() => {
      this.filterPlaces()
    })
  }

  public ngOnInit(): void {
    this.mapService.isReady.then((map) => {
      map.addEventListener("click", (event: LeafletMouseEvent) => {
        if (this.isExpanded) {
          return
        }

        this.isShowAddButton = true

        if (this.addButtonLifeTimerId !== null) {
          clearTimeout(this.addButtonLifeTimerId)
        }

        this.addButtonLifeTimerId = setTimeout(() => {
          this.isShowAddButton = false
        }, 5000)

        this.dialogService.isCurrentEditLatLng = event.latlng
      })
    })
  }

  public onClickClearButton(): void {
    this.searchFormControl.reset()
  }

  public onClickAddButton(): void {
    this.dialogService.open()
    this.isShowAddButton = false
    clearTimeout(this.addButtonLifeTimerId)
  }

  public onClosePlaceCard(): void {
    this.placeCardController.close()
  }

  public onTagsSelectedChanges(tags: string[]): void {
    this.selectedTags = tags
    this.filterPlaces()
  }

  public onClickToggleExpandState(): void {
    this.isExpanded = !this.isExpanded
  }

  public onFocusSearchInput(): void {
    this.isExpanded = true
  }

  private filterPlaces(): void {
    const map: LeafletMap = this.mapService.getLeafletMap()
    const searchValue: string | null = this.searchFormControl.value
    const markers: Map<Place, Marker> = new Map(this.mapService.markers.entries())

    if (searchValue !== null && typeof searchValue === "string" && searchValue.length > 0) {
      for (const [ place ] of markers) {
        if (!place.name.toLowerCase().includes(searchValue.toLowerCase())) {
          markers.delete(place)
        }
      }
    }

    for (const [ place, marker ] of markers) {
      if (this.selectedTags.length <= 0) {
        if (!map.hasLayer(marker)) {
          map.addLayer(marker)
        }

        continue
      }

      if (this.selectedTags.every((tagName) => place.tags.includes(tagName))) {
        if (!map.hasLayer(marker)) {
          map.addLayer(marker)
        }

        continue
      }

      map.removeLayer(marker)
    }

    this.places = Promise.resolve().then(() => {
      return Array.from(markers)
                  .filter(([ , marker ]) => map.hasLayer(marker))
                  .map(([ place ]) => place)
    })
  }
}
