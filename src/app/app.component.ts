import { AfterViewInit, Component } from "@angular/core"
import { Icon, LatLng, Marker, Popup, TileLayer, Tooltip } from "leaflet"
import { DialogService } from "./dialog.service"
import { Place } from "./domain/place"
import { LeafletMap } from "./lib"
import { MapService } from "./map.service"
import { PlaceService } from "./ui/shared/api/place.service"

@Component({
  selector: "mn-root",
  templateUrl: "./app.component.html",
  styleUrls: [ "./app.component.scss" ]
})
export class AppComponent implements AfterViewInit {

  constructor(private mapService: MapService,
              public readonly dialogService: DialogService,
              private placeService: PlaceService) {
  }

  public ngAfterViewInit(): void {
    const map = new LeafletMap("map-container", {
      layers: [
        new TileLayer("https://{s}.google.com/vt?x={x}&y={y}&z={z}", {
          subdomains: [ 'mt0', 'mt1', 'mt2', 'mt3' ]
        })
      ],
      center: new LatLng(45.040034, 38.975828),
      zoom: 13
    })

    this.placeService.readAll().then((places: readonly Place[]) => {
      for (let place of places) {
        const marker = new Marker(
          [ place.coordinates.latitude, place.coordinates.longitude ],
          {
            icon: new Icon({
              iconUrl: "/assets/place-marker.svg",
              iconSize: [ 32, 32 ]
            })
          }
        )

        marker.addTo(map).bindPopup(place.name, {
          autoClose: false,
          closeOnClick: false,
          closeButton: false,
          className: "place-marker-tooltip",
          offset: [ 0, -5 ]
        }).openPopup()

        marker.addEventListener("click", () => {
          // FIXME: Испускается два события
          console.log(place)
        })
      }
    })

    this.mapService.setLeafletMap(map)
  }
}
