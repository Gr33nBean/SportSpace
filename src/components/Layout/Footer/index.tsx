import Link from 'next/link'

import React from 'react'

const lists = [
  {
    label: 'Sport Space',
    pages: [
      { name: 'SportSpace nền tảng', href: '/' },
      { name: 'SportSpace doanh nghiệp', href: '/' },
    ],
  },
  {
    label: 'About Us',
    pages: [
      { name: 'About Us', href: '/' },
      { name: 'Bài Blog', href: '/' },
    ],
  },
  {
    label: 'Hỗ trợ',
    pages: [
      { name: 'Câu hỏi thường gặp (FAQs)', href: '/' },
      { name: 'Terms of Use', href: '/' },
      { name: 'Privacy Policy', href: '/' },
      { name: 'Liên lạc', href: '/' },
    ],
  },
  {
    label: 'Đối tác',
    pages: [
      { name: 'Forum Optimum Badminton Centre', href: '/' },
      { name: 'X Park PJ South', href: '/' },
      { name: 'Sportizza - Home of Sports Petaling Jaya', href: '/' },
      { name: 'and more...', href: '/' },
    ],
  },
]

const icons = [
  {
    icon: (
      <>
        <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
        <path d='M14.05 2a9 9 0 0 1 8 7.94' />
        <path d='M14.05 6A5 5 0 0 1 18 10' />
      </>
    ),
  },
  {
    icon: <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />,
  },
  {
    icon: (
      <>
        <path d='M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17' />
        <path d='m10 15 5-3-5-3z' />
      </>
    ),
  },
]

const Footer = () => {
  return (
    <div className='w-full bg-light-purple'>
      <div className='container py-6 text-primary'>
        <div className='grid min-h-[232px] w-full grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-[0.9fr_0.6fr_repeat(2,1fr)]'>
          {lists.map((list, index) => (
            <div key={index}>
              <h3 className='py-2 text-center text-xs font-bold uppercase sm:text-start'>{list.label}</h3>
              <ul className='text-xs'>
                {list.pages.map((page) => (
                  <li key={page.name} className='text-center sm:text-start'>
                    <Link href={page.href} className='leading-6 hover:underline'>
                      {page.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className='mt-8 h-[0.5px] w-full bg-black opacity-40 md:mt-12'></div>
        <div className='flex flex-col items-center gap-6 pt-6 text-primary md:flex-row'>
          <p className='flex-1 text-center text-xs font-medium md:text-left'>
            © 2024 | SportSpace - Giải pháp quản lý sân hàng đầu
          </p>
          <div className='flex items-center gap-2'>
            {icons.map((icon, index) => (
              <svg
                key={index}
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                {icon.icon}
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
