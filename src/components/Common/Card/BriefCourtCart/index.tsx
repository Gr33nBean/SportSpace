import Image from 'next/image'

type BriefCourtCardProps = {
  thumb: string
  name: string
}

const BriefCourtCard = (props: BriefCourtCardProps) => {
  const { name, thumb } = props
  return (
    <div className='relative h-48 min-w-96 overflow-hidden rounded-2xl lg:h-56 lg:w-[400px]'>
      <Image className='h-full w-full object-cover' alt='court-img' width={120} height={120} src={thumb} />
      <div className='absolute bottom-3 left-3 right-3 flex items-center justify-center rounded-xl bg-white p-2'>
        <p className='truncate text-center font-semibold lg:text-2xl'>{name}</p>
      </div>
    </div>
  )
}

export default BriefCourtCard
