type SearchMovieParams = {
  query: string
  include_adult?: boolean
  // TODO: Irgendwie sollte man die country codes syncen und typen für i18n.
  // siehe: https://developer.themoviedb.org/reference/configuration-primary-translations
  // siehe: https://developer.themoviedb.org/reference/configuration-languages
  language?: 'en-US' | 'de-DE'
  page?: number
}

type SearchMovieResponse = {
  page: number
  results: {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string // ja|de|en...
    original_title: string
    overview: string
    popularity: 11.479
    poster_path: string
    release_date: string // "2000-11-18" -> transform to date
    title: string
    video: boolean
    vote_average: number // 6.7
    vote_count: number
  }[]
  total_pages: 2
  total_results: 24
}

export default defineEventHandler(async (event) => {
  const query = getQuery<SearchMovieParams>(event)
  if (!query.query) return null
  const config = useRuntimeConfig()
  const response = await $fetch<SearchMovieResponse>(
    `${config.public.apis.tmdb.baseUrl}/search/movie`,
    {
      query: {
        language: 'en-US',
        include_adult: true,
        ...query,
      },
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${config.apis.tmdb.key}`,
      },
    },
  )

  return response
})
