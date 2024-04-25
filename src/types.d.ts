type Weather = 'Sunny' | 'Rainy' | 'Cloudy' | 'Windy' | 'Stormy'
type Visibility = 'Excellent' | 'Good' | 'Ok' | 'Bad' | 'Danger'

export interface FullFlightDescription {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment?: string
};

export type ShortFlightDescription = Omit<FullFlightDescription, 'id' | 'comment'>
