export interface ICourt {
  id: string
  name: string
  slug: string
  openTime: string
  closeTime: string
  minBookingTime: string
  price: number
}

export interface ISlot {
  id?: string
  start: string
  end: string
  price: number
  slot: number
  // status: int
  // isGoldenTime: boolean
  // surcharge: int
}

export interface IBusinessCourt {
  courts: ICourt[]
  slots: ISlot[]
}
