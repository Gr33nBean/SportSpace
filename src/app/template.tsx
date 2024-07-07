'use client'
import { usePathname } from 'next/navigation'

import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { createPortal } from 'react-dom'

const delayUnit = 0.15

const time = {
  logo: {
    duration: 0.3,
    delay: 2 * delayUnit,
  },
  header: {
    duration: 0.25,
    delay: 2 * delayUnit + 0.3,
  },
  subHeader: {
    duration: 0.25,
    delay: 2 * delayUnit + 0.3 + 0.25,
  },
  container: {
    duration: 0.35,
    delay: 2 * delayUnit + 0.3 + 0.25 + 0.25 + delayUnit,
  },
}

const Template = ({ children }: { children: React.ReactNode }) => {
  const [body, setBody] = React.useState<HTMLElement | null>(null)
  const isRoot = usePathname() === '/'

  useEffect(() => {
    if (document && document.body) {
      setBody(document.body)
    }
  }, [])

  return (
    <>
      {body && (
        <motion.div>
          {!isRoot &&
            createPortal(
              <motion.div
                initial={{ opacity: 1, pointerEvents: 'all' }}
                animate={{ opacity: 0, pointerEvents: 'none' }}
                transition={{ ease: 'easeInOut', ...time.container }}
                className='fixed bottom-0 left-0 right-0 top-0 z-[1000] flex flex-col items-center justify-center gap-4 bg-white sm:flex-row'
              >
                <motion.div
                  initial={{ scale: 0, rotate: -360 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ ease: 'easeInOut', ...time.logo }}
                  className='flex size-20 items-center justify-center rounded-full bg-secondary text-white'
                >
                  logo
                </motion.div>
                <div className='overflow-hidden'>
                  <motion.div
                    initial={{ x: '-100%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ ease: 'easeInOut', ...time.header }}
                    className='text-center text-3xl font-bold text-secondary sm:text-start sm:text-4xl'
                  >
                    Sport Space
                  </motion.div>
                  <motion.div
                    initial={{ x: '-100%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ ease: 'easeInOut', ...time.subHeader }}
                    className='sm:text-md pt-1 text-sm font-medium text-secondary'
                  >
                    Giải pháp quản lý sân hàng đầu
                  </motion.div>
                </div>
              </motion.div>,
              body
            )}
          {children}
        </motion.div>
      )}
    </>
  )
}

export default Template
