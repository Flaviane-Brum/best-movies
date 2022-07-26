import React from 'react'

type Props = {
  children: React.ReactNode
}

const Title = ({ children }: Props) => {
  return (
    <h1 className=" relative mb-16 flex items-center gap-1  font-source text-[32px] text-white before:absolute before:top-[-4px] before:block before:h-1 before:w-8 before:rounded before:bg-teal-500 before:content-['']">
      {children}
    </h1>
  )
}

export default Title
