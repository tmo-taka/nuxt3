import type { Ref } from 'vue'

export const inc = (counter: Ref<number>) => () => counter.value++
export const dec = (counter: Ref<number>) => () => counter.value--
export const double = (counter: Ref<number>) => () => counter.value = counter.value * 2

export const useSharedCounter = () => {
  const counter: Ref<number>= useState('counter', () => (0))
  return {
    counter: readonly(counter),
    dec: dec(counter),
    inc: inc(counter),
    double: double(counter),
  }
}