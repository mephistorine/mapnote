import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from "@angular/core"
import { FormControl } from "@angular/forms"
import { DomSanitizer, SafeHtml, SafeUrl } from "@angular/platform-browser"
import snarkdown from "snarkdown"
import { Place } from "../../../../domain"
import { getUserCurrentPosition } from "../../../../lib"
import { PlaceService } from "../../api/place.service"

@Component({
  selector: "mn-place-card",
  templateUrl: "./place-card.component.html",
  styleUrls: [ "./place-card.component.scss" ],
  host: {
    class: "mn-place-card"
  }
})
export class PlaceCardComponent implements OnInit {

  @Input()
  public place: Place

  @Output('cardClose')
  public close: EventEmitter<number> = new EventEmitter()

  public rating = new FormControl(3)

  private

  public doubleGisDeepLink: Promise<SafeUrl | string> = getUserCurrentPosition(navigator.geolocation)
    .then((geolocationPosition: GeolocationPosition) => {
      const coordinates: GeolocationCoordinates = geolocationPosition.coords

      return this.domSanitizer.bypassSecurityTrustUrl(`http://2gis.ru/routeSearch/rsType/pedestrian/from/${ coordinates.longitude },${ coordinates.latitude }/to/${ this.place.coordinates.longitude },${ this.place.coordinates.latitude }`)
    })
    .catch(() => {
      alert("Не удалось получить геопозицию")
      return ""
    })

  public yandexTaxiDeepLink: Promise<SafeUrl | string> = getUserCurrentPosition(navigator.geolocation)
    .then((geolocationPosition: GeolocationPosition) => {
      const coordinates: GeolocationCoordinates = geolocationPosition.coords

      return this.domSanitizer.bypassSecurityTrustUrl(`https://3.redirect.appmetrica.yandex.com/route?start-lat=${ coordinates.latitude }&start-lon=${ coordinates.longitude }&end-lat=${ this.place.coordinates.latitude }&end-lon=${ this.place.coordinates.longitude }&appmetrica_tracking_id=25395763362139037&ref=mywebsiteru`)
    })
    .catch(() => {
      alert("Не удалось получить геопозицию")
      return ""
    })

  constructor(private domSanitizer: DomSanitizer,
              private placeService: PlaceService) {
  }

  public convertMarkdown(markdown: string): SafeHtml {
    if (markdown === null || typeof markdown === "undefined") {
      return ""
    }

    return this.domSanitizer.bypassSecurityTrustHtml(snarkdown(markdown))
  }

  public ngOnInit(): void {
  }

  public onClickDeleteButton() {
    // TODO: Удаление маркера с карты
    this.placeService.delete(this.place.id).then(() => alert("Успешно удалено"))
    this.onClickCloseButton()
  }

  public onClickEditButton() {

  }

  public onClickCloseButton() {
    this.close.emit()
  }
}
