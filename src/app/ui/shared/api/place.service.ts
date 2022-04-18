import { HttpClient } from "@angular/common/http"
import { Inject, Injectable } from "@angular/core"
import { firstValueFrom } from "rxjs"
import { Place } from "../../../domain/place"
import { API_SERVER_PATH } from "../tokens"

@Injectable({
  providedIn: "root"
})
export class PlaceService {
  constructor(private httpClient: HttpClient,
              @Inject(API_SERVER_PATH) private apiServerPath: string) {
  }

  public create(place: Place): Promise<Place> {
    return firstValueFrom(this.httpClient.post<Place>(`${ this.apiServerPath }/places`, place))
  }

  public update(id: number, place: Place): Promise<Place> {
    return firstValueFrom(this.httpClient.put<Place>(`${ this.apiServerPath }/places/${ id }`, place))
  }

  public read(id: number): Promise<Place> {
    return firstValueFrom(this.httpClient.get<Place>(`${ this.apiServerPath }/places/${ id }`))
  }

  public readAll(): Promise<readonly Place[]> {
    return firstValueFrom(this.httpClient.get<readonly Place[]>(`${ this.apiServerPath }/places`))
  }

  public delete(id: number): Promise<unknown> {
    return firstValueFrom(this.httpClient.delete<Place>(`${ this.apiServerPath }/places/${ id }`))
  }
}
