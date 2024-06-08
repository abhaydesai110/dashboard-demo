import React from 'react'

const page = () => {
  return (
    <main className='h-screen w-screen'>
      <div className='w-full flex items-center justify-center'>
        <div className=' w-[277px] min-h-screen bg-white border border border-black  text-addey-primary'>
        asd
        </div>
        <div className='w-[calc(100%-277px)] min-h-screen bg-addey-grayLight text-addey-primary'>
          <div className='w-full '>
            <div className='h-14 bg-red-200'></div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default page