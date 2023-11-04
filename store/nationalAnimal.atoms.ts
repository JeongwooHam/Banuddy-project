import type { Animal, Body } from '@/app/api/adopt/national/national.type'
import { atom } from 'jotai'

const animalAtom = atom<Animal>({} as Animal)
const dataAtom = atom<Body | null>(null)
const pageAtom = atom<number>(1)

export const National = {
  animalAtom,
  dataAtom,
  pageAtom,
}
