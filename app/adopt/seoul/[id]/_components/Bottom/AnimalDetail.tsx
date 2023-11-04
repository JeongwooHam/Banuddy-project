import { useAtom } from 'jotai'
import AnimalVideo from './AnimalVideo'
import { stringToHTML } from '@/lib/stringToHtml'
import { Seoul } from '@/store'

interface animalProps {
  type: 'cat' | 'dog' | 'others'
}

const AnimalDetail: React.FC<animalProps> = ({ type }) => {
  const [targetAnimal] = useAtom(Seoul.animalAtom)

  if (targetAnimal) {
    const { SPCS, INTRCN_CN, INTRCN_MVP_URL } = targetAnimal.list
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
