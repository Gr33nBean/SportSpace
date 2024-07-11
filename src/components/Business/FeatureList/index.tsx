import Image from 'next/image'

import check from '@/images/svg/checkBlue.svg'

interface Content {
  title: string
  descriptions: string[]
}

type FeatureListProps = {
  children?: React.ReactNode
  contents: Content[]
}

const FeatureList = (props: FeatureListProps) => {
  const { children, contents } = props
  return (
    <ul>
      {contents.map((content, index) => {
        const { title, descriptions } = content
        return (
          <li key={index}>
            <p className='my-8 text-xl font-bold text-secondary'>{title}</p>
            <ul>
              {descriptions.map((description, index) => (
                <li className='my-2 flex gap-4 lg:my-4' key={index}>
                  <div>
                    <Image alt='check-icon' src={check} width={20} height={20} />
                  </div>
                  <p className='flex-1 text-primary'>{description}</p>
                </li>
              ))}
            </ul>
          </li>
        )
      })}
      {children}
    </ul>
  )
}

export default FeatureList
