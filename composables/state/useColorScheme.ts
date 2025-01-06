// TODO: Use https://vueuse.org/core/useColorMode/

type ColorScheme = 'light' | 'dark'

export const useColorScheme = () =>
  useState<ColorScheme>('colorScheme', () => {
    if (import.meta.server) {
      return 'dark'
    }
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light'
    } else {
      return 'dark'
    }
  })

export const toggleColorScheme = () => {
  const colorScheme = useColorScheme()
  colorScheme.value = colorScheme.value === 'dark' ? 'light' : 'dark'
  document.body.style.colorScheme = colorScheme.value
}
