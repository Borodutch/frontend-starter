import fetch from 'unfetch'

export async function getUserCount() {
  const data = await (await fetch('https://stats.borodutch.com/count')).json()
  return data.count
}
