import { Suspense } from 'preact/compat'
import UserCount from 'components/UserCount'

export default function () {
  return (
    <div className="container prose mx-auto max-w-prose p-10">
      <h1>Frontend template</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <UserCount />
      </Suspense>
    </div>
  )
}
