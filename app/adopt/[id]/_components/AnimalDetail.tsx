import AnimalVideo from './AnimalVideo'

interface animalProps {
  type: 'cat' | 'dog' | 'others'
}

const AnimalDetail: React.FC<animalProps> = ({ type }) => {
  const colorMatch = {
    cat: 'primary',
    dog: 'brown',
    others: 'subColor',
  }

  const dynamicClassName = `border-t-4 border-b-4 border-${colorMatch[type]}-100`

  return (
    <div className={dynamicClassName}>
      <div className="w-content m-center">
        <AnimalVideo />
        <div>소개글</div>
      </div>
    </div>
  )
}

export default AnimalDetail
