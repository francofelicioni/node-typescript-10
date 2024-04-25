import { FullFlightDescription, ShortFlightDescription } from '../types'
import flightsData from './flights.json'

const flights: FullFlightDescription[] = flightsData as FullFlightDescription[]

export const getFullFlights = (): FullFlightDescription[] => flights
export const getShortFlights = (): ShortFlightDescription[] => {
  return flights.map(({ date, weather, visibility }) => {
    return {
      date,
      weather,
      visibility
    }
  })
}

export const findById = (id: number): FullFlightDescription | undefined => {
  const flight = flights.find(f => f.id === id)
  return flight
}
