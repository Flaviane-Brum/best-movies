import React from 'react'
import { CircleNotch } from 'phosphor-react'

const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center py-8 px-4 text-lg text-white">
      <CircleNotch size={50} color="#22E18C" className=" mr-3 animate-spin" />
      Carregando...
    </div>
  )
}

export default Loading
