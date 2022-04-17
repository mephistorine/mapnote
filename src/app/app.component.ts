import { AfterViewInit, Component } from "@angular/core"
import { LatLng, TileLayer } from "leaflet"
import { LeafletMap } from "./lib"

@Component({
  selector: "mn-root",
  templateUrl: "./app.component.html",
  styleUrls: [ "./app.component.scss" ]
})
export class AppComponent implements AfterViewInit {
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
  }
}
