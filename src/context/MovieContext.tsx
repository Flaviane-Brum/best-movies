import { MoviesProps } from 'interfaces/MoviesProps'
import React, { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from 'utils/api'

type ContextProp = {
  children: ReactNode
}
interface MoviesContextData {
  movieList: MoviesProps[]
  setMovieList: React.Dispatch<React.SetStateAction<MoviesProps[]>>
  loading: boolean
  setLoading: (state: boolean) => void
}

const apiKey = import.meta.env.VITE_API_KEY

export const MovieContext = createContext<MoviesContextData>(
  {} as MoviesContextData
)

export const MovieProvider = ({ children }: ContextProp) => {
  const [movieList, setMovieList] = useState<MoviesProps[] | null>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getMovies = async () => {
      try {
        setLoading(true)
        const response = await api.get(
          `movie/popular?api_key=${apiKey}&language=pt-BR&page=1`
        )
        setMovieList(response.data.results)
        setLoading(false)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    getMovies()
  }, [])

  return (
    <MovieContext.Provider
      value={{ movieList, loading, setLoading, setMovieList }}
    >
      {children}
    </MovieContext.Provider>
  )
}
export default MovieContext
