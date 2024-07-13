import Image from 'next/image'

const contents = [
  {
    image: 'https://courtsite.cdn.prismic.io/courtsite/64438d2c-ddb1-42d0-8ccf-ae7c07b60a21_1.svg',
    title: 'Giải pháp cho mọi cơ sở thể thao',
    description:
      'Từ cơ sở cung cấp các dịch vụ thể thao đơn lẻ hoặc đa môn thể thao đến cơ sở đa mục đích - chúng tôi đều hỗ trợ bạn.',
  },
  {
    image: 'https://courtsite.cdn.prismic.io/courtsite/b3344a20-1337-416f-87a3-680de7196aff_2.svg',
    title: 'Quản lý cơ sở của bạn từ xa',
    description: 'Cộng tác với nhóm của bạn và theo dõi hiệu quả kinh doanh của bạn mọi lúc mọi nơi.',
  },
  {
    image: 'https://courtsite.cdn.prismic.io/courtsite/8f4640d1-0e4c-4784-b811-f0ef89fff3dd_3.svg',
    title: 'Số hóa là con đường phía trước',
    description:
      'Nói lời tạm biệt với việc vắng mặt và đặt chỗ gấp đôi. Hãy chào đón việc nhận đặt chỗ trực tuyến và thanh toán trả trước.',
  },
  {
    image: 'https://courtsite.cdn.prismic.io/courtsite/5b0934b2-2312-4dea-b0ea-6215498d5b69_4.svg',
    title: 'Người dùng của chúng tôi = khách hàng của bạn',
    description:
      'Phát triển cơ sở khách hàng của bạn (và doanh thu kinh doanh của bạn) bằng cách tận dụng hàng nghìn người dùng đã có trên Nền tảng Sport Space của chúng tôi.',
  },
  {
    image: 'https://courtsite.cdn.prismic.io/courtsite/7a83cbff-5dd6-4bda-8aae-94b90ba958c2_5.svg',
    title: 'Đừng lo lắng nữa về dịch vụ khách hàng',
    description:
      'Được tiếp cận với nhóm hỗ trợ khách hàng tận tâm (mà không cần thêm vào số lượng nhân viên của bạn). Hãy để chúng tôi chăm sóc khách hàng thay bạn.',
  },
  {
    image: 'https://courtsite.cdn.prismic.io/courtsite/91426b1b-f059-4be3-a5a6-096e4a47fdf9_6.svg',
    title: 'Chúng tôi giữ khách hàng của bạn quay trở lại',
    description:
      'Sự hài lòng của khách hàng là ưu tiên hàng đầu của chúng tôi. Từ đặt phòng trực tuyến đến hỗ trợ khách hàng, chúng tôi muốn khách hàng của bạn có được trải nghiệm tốt nhất.',
  },
]

const WhyFor = () => {
  return (
    <section className='container py-12'>
      <div className='my-4 flex flex-col items-center justify-center'>
        <h1 className='my-2 text-center text-2xl font-bold text-primary'>Tại sao Sport Space dành cho doanh nghiệp?</h1>
        <p className='text-center text-lg text-primary'>Hãy để chúng tôi cho bạn biết lý do tại sao</p>
      </div>
      <ul className='grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:grid-cols-3'>
        {contents.map((content, index) => {
          const { image, title, description } = content
          return (
            <li className='my-10 flex flex-col items-center justify-center gap-4' key={index}>
              <Image alt={`${title}-img`} src={image} width={160} height={160} />
              <p className='text-center text-xl font-bold text-secondary'>{title}</p>
              <p className='flex-1 text-center text-primary'>{description}</p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default WhyFor
