import CardMovie from 'components/CardMovie'
import Container from 'components/Container'
import Head from 'components/helpers/Head'
import useMovie from 'hooks/useMovie'
import { Star } from 'phosphor-react'
import Loading from 'components/helpers/Loading'

const Home = () => {
  const { movieList, loading } = useMovie()

  if (loading) return <Loading />
  return (
    <>
      <Head title="Home" />
      <section
        className="flex flex-col items-center justify-center bg-cyan-800 py-[80px]  sm:py-12"
        aria-label="Lista de filmes populares "
      >
        <Container>
          <div className="flex justify-center">
            <h1 className=" relative mb-12 flex items-center gap-1  font-source text-4xl text-white before:absolute before:top-[-4px] before:block before:h-1 before:w-8 before:rounded before:bg-teal-500 before:content-[''] sm:mb-8 sm:text-3xl">
              Os mais populares <Star weight="fill" color="#22E18C" />
            </h1>
          </div>

          <ul className="flex flex-wrap gap-4  xl:justify-center ">
            {movieList &&
              movieList.map((movie) => (
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

export default Home
