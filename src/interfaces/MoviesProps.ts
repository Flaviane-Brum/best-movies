export interface MoviesProps {
  id: string
  title: string
  overview: string
  release_date: string
  poster_path: string
  backdrop_path: string
  vote_average: number
}

export interface MovieProps {
  id: string
  backdrop_path: string
  budget: number
  genres: Genres[]
  overview: string
  release_date: string | number
  title: string
  poster_path: string
  runtime: number
  revenue: number
  vote_average: number
  vote_count: number
  videos: Video
}

export interface Video {
  results: Results[]
}

interface Results {
  id: string
  key: string
}
export interface Genres {
  id: string
  name: string
}
