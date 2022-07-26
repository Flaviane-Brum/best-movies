import { Link } from 'react-router-dom'
import Button from './Button'
interface CardMovieProps {
  id: string
  poster_path: string
  title: string
}
const imgPathUlr = import.meta.env.VITE_URL_IMAGE
const CardMovie = ({ id, poster_path, title }: CardMovieProps) => {
  return (
    <li className=" w-[261px] rounded-xl	 border-2 border-cyan-700 bg-cyan-900   shadow-md  shadow-cyan-900 transition  duration-700 ease-in-out hover:-translate-y-1 hover:scale-105 hover:border-teal-500 sm:w-[95%]">
      <Link
        to={`/filme/${id}`}
        className=" flex h-full  flex-col    p-4 text-white "
      >
        <div className="h-full justify-start text-teal-500  ">
          {poster_path ? (
            <img
              src={imgPathUlr + poster_path}
              alt={title}
              width={500}
              height={750}
              className="h-[299px]  w-full rounded-[6px]  object-fill drop-shadow-lg  sm:h-auto"
            />
          ) : null}
        </div>
        <h2 className="h-full pt-3 pb-2 text-center font-source text-sm  font-semibold text-white">
          {title}
        </h2>
        <Button>Mais Detalhes</Button>
      </Link>
    </li>
  )
}

export default CardMovie
