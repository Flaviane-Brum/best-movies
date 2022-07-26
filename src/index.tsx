import { MovieProvider } from 'context/MovieContext'
import Home from 'pages/Home'
import Movie from 'pages/Movie'
import Search from 'pages/Search'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'tailwindcss/tailwind.css'
import App from './App'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <MovieProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="filme/:id" element={<Movie />} />
          <Route path="resultado" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </MovieProvider>
)
