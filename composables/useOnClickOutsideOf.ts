import type { Ref } from 'vue'
import { onMounted, onBeforeUnmount } from 'vue'

export default (
  subjectRef: Ref<HTMLElement | null>,
  callback: (event: MouseEvent) => void,
) => {
  const handleClickOutside = (event: MouseEvent): void => {
    if (subjectRef.value && !subjectRef.value.contains(event.target as Node)) {
      callback(event)
    }
  }

  onMounted(() => {
    document.addEventListener('click', handleClickOutside)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
  })
}
