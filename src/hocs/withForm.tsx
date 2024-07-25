import { FieldValues, useForm, UseFormReturn } from 'react-hook-form'

export interface WithFormProps extends UseFormReturn<FieldValues, any, undefined> {
  onSubmit: () => void
  isSuccess?: boolean
}

const withForm = (WrappedComponent: React.ComponentType<WithFormProps>) => {
  const WithFormComponent = ({
    callback,
    isSuccess,
  }: {
    callback: (data: FieldValues) => void
    isSuccess?: boolean
  }) => {
    const formReturn = useForm()

    const { handleSubmit } = formReturn

    const onSubmit = handleSubmit((data) => {
      callback(data)
    })

    return <WrappedComponent {...formReturn} onSubmit={onSubmit} isSuccess={isSuccess} />
  }

  return WithFormComponent
}

export default withForm
