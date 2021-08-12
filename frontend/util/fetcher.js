import { useState } from 'react/cjs/react.production.min'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const getAll = url => {
  return useSWR(url, fetcher)
}

export { getAll }
