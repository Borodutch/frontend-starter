import { getUserCount } from 'helpers/api'
import { useEffect, useState } from 'react'

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
    void fetchData()
  }, [])

  return { userCount }
}

export default useApp
