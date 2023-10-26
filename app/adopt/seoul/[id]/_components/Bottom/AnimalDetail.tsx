import { useAtom } from 'jotai'
import AnimalVideo from './AnimalVideo'
import { animalAtom } from '../../../_components/OneSeoulAnimal'
import { colorMatch } from '@/constants/colorMatch'
import { stringToHTML } from '@/lib/stringToHtml'
import { mergedItem } from '@/app/api/adopt/seoul/seoul.type'

interface animalProps {
  type: 'cat' | 'dog' | 'others'
}

const AnimalDetail: React.FC<animalProps> = ({ type }) => {
  const [targetAnimal] = useAtom(animalAtom)

  if (targetAnimal) {
    const target = targetAnimal as mergedItem
    const { SPCS, INTRCN_CN, INTRCN_MVP_URL } = target.list
    const youtube = INTRCN_MVP_URL.split('be/')[1]

    const dynamicClassName = `border-t-4 border-b-4 border-primary-300 bg-primary-100`

    return (
      <div className={dynamicClassName}>
        <div className="w-content m-center ">
          <div>
            {INTRCN_MVP_URL && (
              <div>
                <AnimalVideo src={youtube} />
              </div>
            )}
          </div>
          <div className="text-center m-[50px] leading-[3rem]">
            {stringToHTML(INTRCN_CN)}
          </div>
        </div>
      </div>
    )
  }
}

export default AnimalDetail
