type MovieDetailsParams = {
  append_to_response?: boolean
  language?: 'en-US' | 'de-DE'
}

type MovieDetailsResponse = {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: {
    id: number
    name: string
    poster_path: string
    backdrop_path: string
  }
  budget: number
  genres: {
    id: number
    name: string
  }[]
  homepage: string
  id: number
  imdb_id: string
  origin_country: string[] // "JP"... TODO: Gerneralize
  original_language: string // "ja"
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: {
    id: number
    logo_path: string
    name: string
    origin_country: string // "JP"...
  }[]
  production_countries: [
    {
      iso_3166_1: 'JP'
      name: 'Japan'
    },
  ]
  release_date: '2022-06-11'
  revenue: 86600000
  runtime: 99
  spoken_languages: [
    {
      english_name: 'Japanese'
      iso_639_1: 'ja'
      name: '日本語'
    },
  ]
  status: 'Released'
  tagline: 'A super awakening and calamity is born.'
  title: 'Dragon Ball Super: Super Hero'
  video: false
  vote_average: 7.897
  vote_count: 2841
}

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const query = getQuery<MovieDetailsParams>(event)
  const config = useRuntimeConfig()
  const response = await $fetch<MovieDetailsResponse>(
    `${config.public.apis.tmdb.baseUrl}/movie/${id}`,
    {
      query,
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${config.apis.tmdb.key}`,
      },
    },
  )

  return response
})
