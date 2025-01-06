import type { Ref } from 'vue'
import { onMounted, onBeforeUnmount } from 'vue'

export default (
  subjectRef: Ref<HTMLElement | null>,
  callback: (event: MouseEvent) => void,
) => {
  const handleClickOutside = (event: MouseEvent): void => {
    console.log(subjectRef.value)
    if (subjectRef.value && !subjectRef.value.contains(event.target as Node)) {
      console.log('run callback')
      callback(event)
    }
  }

  onMounted(() => {
    console.log('registered')
    document.addEventListener('click', handleClickOutside)
  })

  onBeforeUnmount(() => {
    console.log('unregistered')
    document.removeEventListener('click', handleClickOutside)
  })
}
