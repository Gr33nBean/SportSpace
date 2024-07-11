import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { API } from '../../helpers/apiHelpers'

const fetcher = async (url, params) => {
  const data = await API.get(url, { params: params })
    .then((response) => response.data)
    .then((data) => data.metaData)

  return data
}

export const useFetch = (url, params) => {
  return useQuery([url, params], () => fetcher(url, params))
}

const useGenericMutation = (func, key, params, onSuccessAPI, onErrorAPI) => {
  const queryClient = useQueryClient()
  return useMutation(func, {
    onSuccess: (data) => {
      onSuccessAPI(data)
    },
    onError: (error) => {
      onErrorAPI(error)
    },
    onSettled: () => {
      queryClient.invalidateQueries([key, params])
    },
  })
}

export const usePost = (url, params, onSuccessAPI, onErrorAPI, key) => {
  return useGenericMutation((data) => API.post(url, data), key, params, onSuccessAPI, onErrorAPI)
}

export const useUpdate = (url, params, onSuccessAPI, onErrorAPI, key) => {
  return useGenericMutation((data) => API.put(url, data), key, params, onSuccessAPI, onErrorAPI)
}
