import { FieldValues, useForm, UseFormReturn } from 'react-hook-form'

export interface WithFormProps extends UseFormReturn<FieldValues, any, undefined> {
  onSubmit: () => void
}

const withForm = (WrappedComponent: React.ComponentType<WithFormProps>) => {
  const WithFormComponent = ({ callback }: { callback: (data: FieldValues) => void }) => {
    const formReturn = useForm()

    const { handleSubmit } = formReturn

    const onSubmit = handleSubmit((data) => {
      callback(data)
    })

    return <WrappedComponent {...formReturn} onSubmit={onSubmit} />
  }

  return WithFormComponent
}

export default withForm
