import { api } from '@/helpers/apiHelpers'

export const userAPI = {
  get: async (id: number) => {
    return await api.get(`/users/${id}`).then((res) => res.data)
  },
  getAll: async () => {
    return await api.get(`/users`).then((res) => res.data)
  },
  add: async (user: object) => {
    return await api.post(`/users`, user)
  },
}
