export interface ICharacter {
  created: string
  episode: string[]
  gender: string
  id: number
  image: string
  location: {
    name: string
    url: string
  }
  name: string
  origin: {
    name: string
    url: string
  }
  species: string
  status: string
  type: string
  url: string
}

export interface IInfo {
  count: number
  next: string | null
  pages: number
  prev: string | null
}

export interface IEpisode {
  air_date: string
  characters: string[]
  created: string
  episode: string
  id: number
  name: string
  url: string
}
