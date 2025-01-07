// TODO: Define types.

export default (filePath: string, width: string) => {
  const config = useRuntimeConfig()
  return `${config.public.apis.tmdb.imageBaseUrl}/${width}` + filePath
}
