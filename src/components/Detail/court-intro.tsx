import React from 'react'

type CourtIntroProps = {
  courtName: string
  courtCount: number
}

const CourtIntro = (props: CourtIntroProps) => {
  return (
    <>
      <div className='mb-2 flex items-center'>
        <div className='mr-2 h-6 w-2 bg-secondary'></div>
        <h2 className='text-foreground text-xl font-bold'>Giới thiệu</h2>
      </div>
      <p className='text-muted-foreground mb-2'>
        Sân cầu lông {props.courtName} là sân cầu lông dành cho những người yêu thích cầu lông. Tại đây không chỉ là nơi
        để mọi người tham gia rèn luyện, giải trí hằng ngày mà còn là địa điểm diễn ra nhiều trận thi đấu lớn nhỏ trong
        và ngoài khu vực.
      </p>
      <p className='text-muted-foreground'>
        Tổng tại đây có tất cả {props.courtCount} sân cầu lông dành cho những người đến luyện tập và tham gia thi đấu.
        Mỗi sân của {props.courtName} đều được đầu tư hoàn tráng bởi hệ thống sân và ánh sáng đạt tiêu chuẩn quốc gia.
        Bởi vậy mà thu hút rất nhiều người đến tập luyện.
      </p>
    </>
  )
}

export default CourtIntro
