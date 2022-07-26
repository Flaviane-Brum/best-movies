import MovieInfo from 'components/MovieInfo'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from 'utils/api'
import format from 'date-fns/format'
import { Calendar, Timer, Wallet, TrendUp, Star, Image } from 'phosphor-react'
import { formatHours } from 'utils/formatHour'
import Container from 'components/Container'
import useMovie from 'hooks/useMovie'
import { MovieProps } from 'interfaces/MoviesProps'
import { formatCurrency } from 'utils/formatCurrency'
import Loading from 'components/helpers/Loading'
import Head from 'components/helpers/Head'

const imgUlr = import.meta.env.VITE_URL_IMAGE
const bgImage: string = import.meta.env.VITE_URL_BACKGROUND
const Movie = () => {
  const [movieDetails, setMovieDetails] = useState<MovieProps | null>()
  const { id } = useParams()
  const { loading, setLoading } = useMovie()
  useEffect(() => {
    const getMovieById = async () => {
      try {
        setLoading(true)
        const apiKey = import.meta.env.VITE_API_KEY
        const response = await api.get(
          `movie/${id}?api_key=${apiKey}&language=pt-BR&append_to_response=videos`
        )
        setMovieDetails(response.data)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }

    getMovieById()
  }, [id, setLoading])

  if (loading) return <Loading />
  if (movieDetails)
    return (
      <>
        <Head title={movieDetails.title} />
        <article
          className="relative z-10 min-h-screen  	bg-cyan-900/90	bg-cover  bg-fixed  bg-center bg-no-repeat py-[80px] px-4 before:absolute before:top-0	before:left-0 before:h-full before:w-full before:bg-cyan-900/95  before:content-['']"
          style={{
            backgroundImage: movieDetails.backdrop_path
              ? `url(${bgImage + movieDetails.backdrop_path})`
              : `bg-cyan-900/90`
          }}
        >
          <Container>
            <div className="relative z-20 flex gap-20   md:flex-col-reverse md:gap-5 ">
              <div className=" max-w-[400px] rounded">
                <div className="md:hidden ">
                  {movieDetails.poster_path ? (
                    <img
                      src={imgUlr + movieDetails.poster_path}
                      alt={movieDetails.title}
                      className=" mb-6 rounded shadow-lg shadow-black/60"
                      width={500}
                      height={750}
                    />
                  ) : (
                    <div className=" mb-6 h-[500px] w-[400px] rounded bg-teal-900 shadow-lg shadow-black/60">
                      <Image
                        weight="duotone"
                        className="h-full w-full rounded text-teal-500"
                      />
                    </div>
                  )}
                </div>
                <div>
                  <p className="mb-3 font-source text-2xl text-white ">
                    Avalição dos usuários
                  </p>
                  <div className="flex items-center gap-1">
                    <Star size={24} weight="fill" color="#facc15" />
                    <span className="text-lg text-neutral-300">
                      {movieDetails.vote_average.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="max-w-[550px]">
                <div className="mb-8 gap-4">
                  <h1 className=" relative  mb-2 flex items-center gap-1 font-source text-4xl font-bold text-white before:absolute before:top-[-4px] before:block before:h-1 before:w-8 before:rounded before:bg-teal-500  before:content-['']  sm:text-3xl ">
                    {movieDetails.title}
                  </h1>
                  <div className="flex flex-wrap items-center gap-2 text-neutral-300 ">
                    <span className="flex h-[15px] w-[15px] items-center justify-center rounded border-2  border-teal-500 p-2 text-[10px]">
                      G
                    </span>
                    {movieDetails.genres.map((genre) => (
                      <small
                        className="relative flex  flex-wrap  items-center text-xs text-neutral-400 "
                        key={genre.id}
                      >
                        {genre.name}
                      </small>
                    ))}
                  </div>
                </div>

                <ul className="mb-8 flex  max-w-[500px] flex-col justify-center text-left">
                  <MovieInfo
                    icon={
                      <Calendar weight="duotone" color="#22E18C" size={34} />
                    }
                    span={format(
                      new Date(movieDetails.release_date),
                      'MM/dd/yyyy'
                    )}
                    label="Lançamento"
                  />

                  <MovieInfo
                    label="Duração"
                    icon={<Timer color="#22E18C" size={34} />}
                    span={formatHours(movieDetails.runtime)}
                  />
                  <MovieInfo
                    label="Orcamento"
                    icon={<Wallet color="#22E18C" size={34} />}
                    span={
                      movieDetails.budget > 0
                        ? formatCurrency(movieDetails.budget)
                        : '-'
                    }
                  />
                  <MovieInfo
                    label="Receita"
                    icon={<TrendUp color="#22E18C" size={34} />}
                    span={
                      movieDetails.revenue > 0
                        ? formatCurrency(movieDetails.revenue)
                        : '-'
                    }
                  />
                </ul>
                <h2 className="mb-4 font-source text-2xl text-white  ">
                  Sinopse
                </h2>
                <p className="mb-5 max-w-[60ch] text-neutral-200">
                  {movieDetails.overview}
                </p>
                <a
                  target="_blank"
                  href={`https://www.youtube.com/watch?v=${movieDetails.videos.results[0]?.key}`}
                  className=" flex w-full max-w-[200px] justify-center rounded bg-teal-500 py-3 text-lg font-bold text-teal-700 shadow-lg shadow-black/60 transition-colors hover:bg-cyan-700 hover:text-teal-500"
                  rel="noreferrer"
                >
                  Ver Trailer
                </a>
              </div>
            </div>
          </Container>
        </article>
      </>
    )
  else return null
}

export default Movie
