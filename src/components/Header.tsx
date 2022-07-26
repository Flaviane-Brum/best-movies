import { MagnifyingGlass, FilmSlate } from 'phosphor-react'
import { useState, FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (!search) return

    navigate(`/resultado?q=${search}`)
    setSearch('')
  }
  return (
    <header className="border-cyan-600 bg-cyan-700 ">
      <div className="mx-auto max-w-[1200px] p-8 ">
        <div className=" flex flex-wrap items-center  justify-between md:flex-col">
          <Link to="/" className=" mb-4 flex items-center justify-center">
            <FilmSlate className="animate-pulse text-3xl text-teal-500 transition-colors hover:text-teal-400  " />
            <h1 className="font-source text-3xl font-bold text-white">
              Best
              <span className="text-teal-500 transition-colors hover:text-teal-400">
                Movies
              </span>
            </h1>
          </Link>
          <form
            onSubmit={handleSubmit}
            action=""
            className="relative flex h-14 w-full max-w-[500px] items-center"
          >
            <input
              type="text"
              placeholder="Procure por um filme"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              className="h-full w-full rounded   border border-cyan-800 bg-cyan-800 px-4 py-3 text-lg text-white placeholder:font-source placeholder:font-bold placeholder:text-teal-700 focus:outline-none focus:ring focus:ring-cyan-600 "
            />
            <button
              aria-label="Botão buscar filme"
              type="submit"
              className=" absolute right-0 flex h-full w-14 flex-1 items-center justify-center rounded rounded-l-none border border-cyan-700 bg-teal-500 text-cyan-900 transition-colors hover:bg-teal-900 hover:text-teal-500"
            >
              <MagnifyingGlass className="text-2xl " />
            </button>
          </form>
        </div>
      </div>
    </header>
  )
}

export default Header
