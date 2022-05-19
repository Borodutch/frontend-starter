export default function (n: number) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}
