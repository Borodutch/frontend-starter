import fetch from 'unfetch'

export default async function () {
  const data = await (await fetch('https://stats.borodutch.com/count')).json()
  return data.count as number
}
