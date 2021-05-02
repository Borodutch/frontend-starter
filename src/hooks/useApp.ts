import { useEffect, useState } from 'react'
import { getUserCount } from 'helpers/api'

const useApp = () => {
  const [userCount, setUserCount] = useState<undefined | number>(undefined)

  const fetchData = async () => {
    try {
      setUserCount(await getUserCount())
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { userCount }
}

export default useApp
