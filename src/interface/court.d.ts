export interface ICourt {
  id: string
  name: string
  slug: string
  openTime: Date
  closeTime: Date
  minBookingTime: Date
  price: 160000
  slots: ISlot[]
}

export interface ISlot {
  id?: string
  start: Date
  end: Date
  price: int
  status: int
  isGoldenTime: boolean
  surcharge: int
}
