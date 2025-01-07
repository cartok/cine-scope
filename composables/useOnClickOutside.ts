// TODO: use https://vueuse.org/core/onClickOutside/
import type { Ref } from 'vue'

export default (
    subjectRef: Ref<HTMLElement | null>,
    callback: (event: MouseEvent) => void,
  ) =>
  (event: MouseEvent): void => {
    if (subjectRef.value && !subjectRef.value.contains(event.target as Node)) {
      callback(event)
    }
  }
