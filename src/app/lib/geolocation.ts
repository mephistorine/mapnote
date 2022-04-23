export function getUserCurrentPosition(geolocation: Geolocation): Promise<GeolocationPosition> {
  return new Promise<GeolocationPosition>((resolve, reject) => {
    geolocation.getCurrentPosition(resolve, reject, { enableHighAccuracy: true })
  })
}
