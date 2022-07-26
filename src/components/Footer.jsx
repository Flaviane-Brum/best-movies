import { Heart } from 'phosphor-react'
const Footer = () => {
  return (
    <footer className="mx-auto  flex h-28 w-full items-center justify-center bg-cyan-700 px-4">
      <p className="flex items-center gap-1  text-lg font-bold text-white sm:text-base">
        Criado com <Heart color="#22E18C" className="animate-pulse" />
        por{' '}
        <a
          href="https://github.com/Flaviane-Brum"
          aria-label="Link para meu Github"
          target="_blank"
          rel="noreferrer"
          className="text-teal-500"
        >
          Flaviane Brum
        </a>
      </p>
    </footer>
  )
}

export default Footer
