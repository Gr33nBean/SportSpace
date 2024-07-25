import PrimaryButton from '@/components/Common/Button/PrimaryButton'
import Email from '@/components/Common/Form/Email'
import Firstname from '@/components/Common/Form/Firstname'
import Lastname from '@/components/Common/Form/Lastname'
import PhoneNumber from '@/components/Common/Form/PhoneNumber'
import withForm, { WithFormProps } from '@/hocs/withForm'

const UpdateProfileForm = (props: WithFormProps) => {
  const {
    register,
    formState: { errors },
    watch,
    onSubmit,
  } = props

  return (
    <div>
      <form onSubmit={onSubmit} className='p-6'>
        <div className='flex h-[16rem] flex-col gap-5 overflow-hidden overflow-y-auto px-2'>
          <div className='flex gap-4'>
            <Lastname register={register} errors={errors} />
            <Firstname register={register} errors={errors} />
          </div>
          <PhoneNumber register={register} errors={errors} />
          <Email register={register} errors={errors} />
        </div>
      </form>
      <div className='mb-4 mt-4 flex gap-5 p-6'>
        <PrimaryButton
          className='h-12 flex-1 rounded-md border border-black bg-secondary px-3 py-1.5 text-sm/6 font-semibold shadow-inner shadow-white/10 focus:outline-none'
          onClick={onSubmit}
          variant='outlined'
        >
          <span className='text-base text-black'>Sửa</span>
        </PrimaryButton>
      </div>
    </div>
  )
}

export default withForm(UpdateProfileForm)
