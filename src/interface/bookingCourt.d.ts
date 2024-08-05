import { ISlot } from './court'

export interface IBookingCourt {
  data: ISlot[]
  isSuccess: boolean
  isFailure: boolean
}
