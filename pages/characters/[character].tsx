import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import { getCharacter } from 'rickmortyapi'
import { WithLayout } from '../../HOC/Layout'

const Character = () => {
  const router = useRouter()
  const [id, setId] = useState<number>()

  useEffect(() => {
    setId(Number(router.query.character))
  }, [router])

  useEffect(() => {
    if (id) {
      getCharacter(id)
        .then((response) => {
          console.log(response)
        })
        .catch((e) => {
          console.log(e.message)
          return []
        })
    }
  }, [id])

  if (id) {
    return <span>{id}</span>
  } else {
    return <span>Hello</span>
  }
}

export default WithLayout(Character)
