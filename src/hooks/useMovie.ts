import MovieContext from 'context/MovieContext'
import { useContext } from 'react'

const useMovie = () => useContext(MovieContext)

export default useMovie
