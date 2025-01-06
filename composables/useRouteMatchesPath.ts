export default () => {
  const route = useRoute()
  return (path: string) => {
    const match = route.matched.some((match) => match.path === path)
    console.log('route machtes?', { match, route, path })
  }
}
