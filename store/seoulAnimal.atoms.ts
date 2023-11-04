import type { mergedItem } from '@/app/api/adopt/seoul/seoul.type'
import { atom } from 'jotai'

const categoryAtom = atom('전체')
const filterAtom = atom({
  cate: '',
  sex: '',
  adopt: '',
  foster: '',
  name: '',
  isSubmit: false,
})
const animalAtom = atom<mergedItem | object>({})
const dataAtom = atom<mergedItem[] | null>(null)
const pageAtom = atom<number>(1)

export const Seoul = {
  animalAtom,
  categoryAtom,
  dataAtom,
  filterAtom,
  pageAtom,
}
