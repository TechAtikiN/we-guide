import React from 'react'

export default function Blogs() {
  return (
      <div className='relative z-30  h-screen bg-blue-200'>
          <div className='text-center pt-8'>
              <div className='text-2xl'>Connect and read about our </div>
          <div className='text-8xl font-normal pb-12'>Expert's Insights</div>
          </div>
          
          <div className='flex justify-between pl-12 '>
              <div className='text-center max-w-sm bg-blue-300 rounded-lg border border-gray-200 shadow-xl'>
              <img className='rounded-t-lg ' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTmWaWVf-oTuxT4v2Kwim2qyfPpYCVnx0NKg&usqp=CAU' />
              <h4 className='p-5 text-2xl font-bold tracking-tight text-gray-900 '>Taking the big leap</h4>
              <h1>Januray 23, 2022</h1>
              <div className=''>
                 <h2 className='mb-3 font-normal text-blue-900'>The point of using Lorem Ipsum is that it <br></br>has a more-or-less normal distribution <br></br>of letters, as opposed to using 'Content here,<br></br> content here', making it look like English. </h2> 
                      <h3>By Monalisa Vinci</h3>
                      <button className='text-xl rounded-lg font-semibold bg-teal-500 p-3 m-3' >Connect</button>
                  </div>
              </div>
              <div className='text-center bg-blue-300 rounded-lg border border-gray-200 shadow-xl'>
              <img className='rounded-t-lg ' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL0UIv9qN9oIirow346Ll1fPr7RxdHbnMOMg&usqp=CAU' />
              <h4 className='p-5 text-2xl font-bold tracking-tight text-gray-900 '>Know your career better</h4>
              <h1>March 30, 2022</h1>
              <div className=''>
                 <h2 className=''>The point of using Lorem Ipsum is that it <br></br>has a more-or-less normal distribution <br></br>of letters, as opposed to using 'Content here,<br></br> content here', making it look like English. </h2> 
                      <h3>By Nancy Wheeler</h3>
                      <button className='text-xl rounded-lg font-semibold bg-teal-500 p-3 m-3'>Connect</button>
                  </div>
          </div>
          <div className='text-center mr-12 bg-blue-300 rounded-lg border border-gray-200 shadow-xl'>
              <img className='rounded-t-lg object-none' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJuYaXPnY-VP2AClVmWPdaCl_YBAdnGMMkyg&usqp=CAU' />
              <h4 className='p-5 text-2xl font-bold tracking-tight text-gray-900 '>Is it the right time yet?</h4>
              <h1>March 25, 2022</h1>
              <div className=''>
                 <h2 className=''>The point of using Lorem Ipsum is that it <br></br>has a more-or-less normal distribution <br></br>of letters, as opposed to using 'Content here,<br></br> content here', making it look like English. </h2> 
                      <h3>By Ken Adams</h3>
                      <button className='text-xl rounded-lg font-semibold bg-teal-500 p-3 m-3'>Connect</button>
                  </div>
          </div>
          </div>
          
    </div>
  )
}
