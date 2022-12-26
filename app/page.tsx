import {getClient} from '#/src/sanity/sanity-server'
import {indexQuery} from '#/src/sanity/queries'
import {Post} from '#/src/sanity/types'

import {Analytics} from '@vercel/analytics/react'

export default async function Page() {
  const data = await getData()
  console.log('🚀 ~ file: page.tsx:7 ~ Page ~ data', data)

  return (
    <div className="space-y-8">
      <h1 className="text-xl font-medium text-gray-300">Examples</h1>

      {data?.map((post) => (
        <div key={post._id} className="text-xl font-medium text-gray-500">
          {post.title}
        </div>
      ))}
    </div>
  )
}

const getData = async (): Promise<Post[]> => {
  return await getClient(false).fetch(indexQuery)
}
