import React from 'react'

type Props = {
  children: React.ReactNode
}
const Button = ({ children }: Props) => {
  return (
    <div className="  ">
      <button className="w-full self-end rounded bg-teal-500 py-2 px-5 font-source font-bold text-teal-700 transition-colors hover:bg-cyan-700 hover:text-teal-500">
        {children}
      </button>
    </div>
  )
}

export default Button
