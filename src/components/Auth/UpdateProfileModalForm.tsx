import { FieldValues } from 'react-hook-form'

import BaseAuthModalForm from './BaseAuthModalForm'
import UserProfileUpdateForm from './UserProfileUpdateForm'

const UpdateProfileModalForm = ({ open = false, handleClose }: { open?: boolean; handleClose: () => void }) => {
  const onSubmit = (data: FieldValues) => {
    console.log('data', data)
  }
  return (
    <>
      <BaseAuthModalForm open={open} handleClose={handleClose} callback={onSubmit} title='Sửa hồ sơ'>
        <UserProfileUpdateForm callback={onSubmit} />
      </BaseAuthModalForm>
    </>
  )
}
export default UpdateProfileModalForm
