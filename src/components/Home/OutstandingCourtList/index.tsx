import BriefCourtCard from '@/components/Common/Card/BriefCourtCart'

const courts = [
  {
    name: 'Sân cầu lông Bình Triệu',
    thumb: 'https://babolat.com.vn/wp-content/uploads/2023/10/san-cau-long-viettel.jpg',
  },
  {
    name: 'Sân Cây Lộc Vừng - Linh Đông',
    thumb:
      'https://s3-alpha-sig.figma.com/img/3138/5383/fab45ff5a39e53be5aebd37260601b96?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lNUb8Eos6~DBxqSa24aUa1JIuLYsf9LGHox08oq7tqW5J2Zw5fj7HgwzBdca2pD1YwWmk6WgOwboUQHnAs7-rcNMGVWQKyOcraQG6ayboieN2hPsy2h3hCVahCMzjk-xUYBDzjhmL~ZXe5J6B5Xqo4NOxQzx6RZlIhsVCXO1g9QmcM05rbceQ~wq1IDhnuIAHoJ9QWxErHircOiWt-cCLGNWr-RUCsEgvcvrFYfez-PhgyNfanKZnlug2G6cczY3~Mk4T04qV8vtX46VSzaBVlOuZ12hsY2plLz~khHkML9FTYd1pKfQPiibp999dCtI9dwV5jmzX8uQeKcSb5eeLA__',
  },
  {
    name: 'Sân Lan Anh - Linh Trung',
    thumb:
      'https://s3-alpha-sig.figma.com/img/1190/6f0b/4e89e3a614e469ff363891d3fabf2e46?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kf6iWpiARaoxNqojtbv4FkOtozzUS60r1n9fdOrIio6CU4BnsO~N2edGgNEOc99JT5C4I1fhoAo2djxjR3dGMI4Cybc9bQBrsMKRrgP83Y9q8tR~IKbLAWuVhF9WuQeKorHgN9qK1-Pr7oAudTvBchl~MpeRkWwzJflsbBdWJ2Ewb~HVdm0eSMGIMib7gRFacqSBCvfewu3JXxbNcW6XhIeWXxGaUDn4Yc~Duc2ELCb8pAPpmhXdC280t7H~T5lKu5QtJWjFGzfPNVi6y4KpF5NM~8CYHfKOiGmBEGvhCeupIrnLTGJCsTccMdK-Du~-7Q7K8HeAa1XKxUYkkfAMqA__',
  },
  {
    name: 'Sân Đồng Giao - Linh Xuân',
    thumb:
      'https://s3-alpha-sig.figma.com/img/13d2/67bc/5fbcc487f42069b17d09529d5be18f4b?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nO5cdmAaT17sl5ZrFPL6F8RgMJJQIPgNDGzv4yaMq3~tnXfnxQNO9ls3k1qO5kqoZ86f1Y8YTvgLSdNDpKO~CQQFWlP2wWsJc7yUe2FXJf9dcoVtiBLqB5iYCSY82ut1K0bnTPm-wwBvSeNIQQ7Tvu739-b8qhmYfqxr9lYxUoYeDhJ41-a4TmJ6zVU8~slhD4FYOy9QEMBgKXl0gPzdklfRIRn9ovArG4g8BNFoEqIyk8LTQaLBqSOKfiZRJKFme0L49lZN~zseExH9bh76we3cFlqs0Ih1uQVuXxZAaf4X7KG9RVJazLupBcHyc7eiYltiVq8L2viYqSOkemTQNg__',
  },
]

const OutstandingCourtList = () => {
  return (
    <div className='relative z-20 flex items-center bg-secondary px-4 py-12 md:px-8 lg:min-h-[80dvh] lg:px-16'>
      <div className='container text-black'>
        <h1 className='my-2 text-4xl font-bold lg:text-5xl'>Những sân nổi bật</h1>
        <p className='text-sm lg:text-xl'>
          Các sân thể thao chất lượng cao, phí thuê rẻ được nhiều khách hàng lựa chọn
        </p>
        <div className='mt-4 flex flex-nowrap gap-4 overflow-x-scroll lg:gap-6'>
          {courts.map((court, index) => {
            const { name, thumb } = court
            return <BriefCourtCard name={name} thumb={thumb} key={index} />
          })}
        </div>
      </div>
    </div>
  )
}

export default OutstandingCourtList
