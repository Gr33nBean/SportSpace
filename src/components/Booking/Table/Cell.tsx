import React, { useState } from 'react'

export const headerHeight = 80
export const rowHeight = 100
export const courtWidth = 30 //%
export const splitCell = 2

export const cellState: { color: string; label: string; value: CellStateType }[] = [
  {
    color: '#D9D9D940',
    label: 'Đã đặt',
    value: 'busy',
  },
  {
    color: '#D9D9D900',
    label: 'Trống',
    value: 'available',
  },
  {
    color: '#26E8A240',
    label: 'Đã chọn',
    value: 'selected',
  },
]

export const HeaderCell = ({
  children,
  className,
  colSpan,
}: {
  children: React.ReactNode
  className?: string
  colSpan?: number
}) => {
  return (
    <div
      className={`flex items-center justify-center border-b border-r border-custom-gray bg-white ${className}`}
      style={{
        height: headerHeight + 'px',
        gridColumn: `span ${colSpan ? colSpan : 1} / span ${colSpan ? colSpan : 1}`,
      }}
    >
      {children}
    </div>
  )
}

export const BodyCell = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div
      className={`flex items-center justify-center border-gray-300 ${className}`}
      style={{ height: rowHeight + 'px' }}
    >
      {children}
    </div>
  )
}

// value of value key in cellState
type CellStateType = 'busy' | 'available' | 'selected'
export const Cell = ({
  state,
  children,
  className,
  onClick,
}: {
  children?: React.ReactNode
  className?: string
  state: CellStateType
  onClick?: () => void
}) => {
  const [tempState, setTempState] = useState(state)
  return (
    <button
      className={`${className} transition-all duration-300`}
      disabled={state === 'busy'}
      style={{
        backgroundColor: cellState.find((s) => s.value === tempState)?.color,
      }}
      onClick={() => {
        onClick && onClick()
        setTempState((prev) => {
          return prev === 'selected' ? 'available' : 'selected'
        })
      }}
    >
      {children}
    </button>
  )
}
