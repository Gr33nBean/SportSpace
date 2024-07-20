import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { API } from '../../helpers/apiHelpers'

type MutationData = any
type MutationError = any

export const useFetch = <TData>(url: string, params?: object) => {
  const fetcher = async (url: string, params?: object): Promise<TData> => {
    const data = await API.get(url, { params })
    return data.data.data as TData
  }

  return useQuery<TData, Error>({
    queryKey: [url, params],
    queryFn: () => fetcher(url, params),
  })
}

const useGenericMutation = <TData extends MutationData, TError extends MutationError>(
  func: (data: any) => Promise<TData>,
  key: string,
  params?: object,
  onSuccessAPI?: (data: TData) => void,
  onErrorAPI?: (error: TError) => void
) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: func,
    onSuccess: onSuccessAPI,
    onError: onErrorAPI,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [key, params] })
    },
  })
}

export const usePost = <TData extends MutationData, TError extends MutationError>(
  url: string,
  params: object,
  onSuccessAPI?: (data: TData) => void,
  onErrorAPI?: (error: TError) => void,
  key?: string
) => {
  return useGenericMutation((data) => API.post(url, data), key as string, params, onSuccessAPI, onErrorAPI)
}

export const useUpdate = <TData extends MutationData, TError extends MutationError>(
  url: string,
  params: object,
  onSuccessAPI?: (data: TData) => void,
  onErrorAPI?: (error: TError) => void,
  key?: string
) => {
  return useGenericMutation((data) => API.put(url, data), key as string, params, onSuccessAPI, onErrorAPI)
}
