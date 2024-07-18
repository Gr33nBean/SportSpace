import BookingDetail from '@/components/Profile/BookingDetail'
import ProfileMenu from '@/components/Profile/ProfileMenu'

const Profile = () => {
  return (
    <div className='container'>
      <div className='flex min-h-[85dvh] w-full flex-col gap-6 md:px-20'>
        <p className='w-full border-b border-black py-8 text-xl font-semibold text-black'>Lịch sử đặt đơn</p>

        <div className='flex w-full gap-6 max-md:flex-col'>
          {/*  */}
          <BookingDetail
            courtName='Sân cầu lông Hiên Hoa - Sân 01'
            date='Thứ 3, 02 Tháng 7 2024'
            time='1:00pm - 1:30pm'
            totalPrice='120000 d'
            isPaid={true}
          />
          {/*  */}
          <div className='h-10 w-full md:w-[32%]'>
            <ProfileMenu />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
