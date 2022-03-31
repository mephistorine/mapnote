import { Coordinates } from "./coordinates"

export interface Place {
  id: string
  name: string
  rating: number
  description: string
  tags: string[]
  photos: string[]
  coordinates: Coordinates
}
