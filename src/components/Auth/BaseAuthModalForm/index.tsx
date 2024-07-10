import { useWindowSize } from '@uidotdev/usehooks'
import { FieldValue, FieldValues, useForm } from 'react-hook-form'

type BaseAuthModalFormProps = {
  open: boolean
  handleClose: () => void
  callback: () => void
  formFields: FieldValue<FieldValues>
  children: React.ReactNode
}

const BaseAuthModalForm = (props: BaseAuthModalFormProps) => {
  const { formFields, callback, open, handleClose, children } = props

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<typeof formFields>()

  const { width } = useWindowSize()

  const onSubmit = handleSubmit((data) => {
    callback()
  })

  return <></>
}

export default BaseAuthModalForm
