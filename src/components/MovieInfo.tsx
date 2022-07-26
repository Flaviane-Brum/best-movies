import { ReactElement } from 'react'

type Props = {
  icon: ReactElement<string>
  label: string
  span: string | number | string[]
}

const MovieInfo = ({ icon, span, label }: Props) => {
  return (
    <li
      className={`relative   flex items-center gap-2 border-b border-teal-800 pt-4 pb-2 text-base font-bold text-white last-of-type:border-b-0`}
    >
      {icon} {label}:
      <span className="flex break-all font-sans text-sm font-bold text-neutral-300 sm:text-xs">{`${span}`}</span>
    </li>
  )
}

export default MovieInfo
