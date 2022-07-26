import { useEffect } from 'react'

type Props = {
  title: string
}
const Head = ({ title }: Props) => {
  useEffect(() => {
    document.title = title + ' | Best Movies'
  }, [title])

  return <></>
}

export default Head
