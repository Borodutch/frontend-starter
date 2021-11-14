import { useEffect, useState } from 'react'
import getUserCount from 'helpers/api'

export default function useUserCount() {
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
