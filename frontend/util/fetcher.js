import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

/**
 * Buscar dados da API com uso do SWR
 * sobre o SWR: https://swr.vercel.app/docs/with-nextjs
 * @param {string} url
 * @returns {array} dados
 */
const getAll = url => {
  return useSWR(url, fetcher)
}

export { getAll }
