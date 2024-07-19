import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { API } from '../../helpers/apiHelpers'

type MetadataType = any
type MutationData = any
type MutationError = any

const fetcher = async (url: string, params?: object): Promise<MetadataType> => {
  const data = await API.get(url, { params })
  return data.data
}

export const useFetch = (url: string, params?: object) => {
  return useQuery({
    queryKey: [url, params],
    queryFn: () => fetcher(url, params),
  })
}

const useGenericMutation = <TData extends MutationData, TError extends MutationError>(
  func: (data: any) => Promise<TData>,
  key: string,
  params?: object | string,
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

export const usePost = (
  url: string,
  params: object,
  onSuccessAPI?: (data: any) => void,
  onErrorAPI?: (error: any) => void,
  key?: string
) => {
  return useGenericMutation((data) => API.post(url, data), key as string, params, onSuccessAPI, onErrorAPI)
}

export const useUpdate = (
  url: string,
  params: object,
  onSuccessAPI?: (data: any) => void,
  onErrorAPI?: (error: any) => void,
  key?: string
) => {
  return useGenericMutation((data) => API.put(url, data), key as string, params, onSuccessAPI, onErrorAPI)
}
