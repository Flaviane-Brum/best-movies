import CardMovie from 'components/CardMovie'
import Container from 'components/Container'
import Head from 'components/helpers/Head'
import Title from 'components/Title'
import useMovie from 'hooks/useMovie'
import { MoviesProps } from 'interfaces/MoviesProps'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { api } from 'utils/api'
import Loading from 'components/helpers/Loading'

const apiKey = import.meta.env.VITE_API_KEY
const Search = () => {
  const [searchParams] = useSearchParams()
  const [movies, setMovies] = useState<MoviesProps[] | null>()
  const { loading, setLoading } = useMovie()
  const query = searchParams.get('q')
  useEffect(() => {
    const getSearchedMovies = async () => {
      try {
        setLoading(true)
        const response = await api.get(
          `search/movie?api_key=${apiKey}&query=${query}&language=pt-BR`
        )

        setMovies(response.data.results)

        setLoading(false)
      } catch (error) {
        console.log(ErrorEvent)
      }
    }
    getSearchedMovies()
  }, [query, setLoading, setMovies])

  if (loading) return <Loading />
  return (
    <>
      <Head title="Resultados" />

      <section
        aria-label="Resultado da procura"
        className="flex flex-col items-center justify-center bg-cyan-800 py-[80px]  sm:py-12"
      >
        <Container>
          <div className="flex justify-center">
            <Title>
              Resultados para:
              <span className="text-center font-medium capitalize text-teal-500">
                {query}
              </span>
            </Title>
          </div>
          <ul className="flex flex-wrap gap-7">
            {movies &&
              movies.map((movie) => (
                <CardMovie
                  key={movie.id}
                  id={movie.id}
                  poster_path={movie.poster_path}
                  title={movie.title}
                />
              ))}
          </ul>
        </Container>
      </section>
    </>
  )
}

export default Search
