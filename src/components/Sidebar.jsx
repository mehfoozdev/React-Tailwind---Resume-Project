import React from 'react'
import Mehfooz1 from '../assets/images/profile pic ok.png'
import Mehfooz2 from '../assets/images/profile pic.jpg'

const Sidebar = () => {
  return (
    <>
        <div className='bg-green-800 min-h-screen p-3 text-white'>
            <div className='flex justify-center mt-3 '>
                <img src={ Mehfooz1 } alt="Mehfooz" className='w-36 h-36 rounded-full' />
            </div>

            {/* Contact Section */}
            <p className='font-semibold text-left mt-5 text-2xl'>Contact</p>
            <hr className='bg-white my-2' />

            <div className='flex items-center gap-1 mb-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <p>mehfooz@gmail.com</p>
            </div>
            <div className='flex items-center gap-1 mb-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>

                <p>+92 336 2414909</p>
            </div>
            <div className='flex items-center gap-1 mb-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <p>Karachi, Pakistan </p>
            </div>
            <div className='flex items-center gap-1 mb-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>
                <a href='https://github.com/mehfoozdev' target='_blank' className='text-gray-100'>github.com/mehfoozdev</a>
            </div>


            {/* Skills Section */}
            <p className='font-semibold text-left mt-5 text-2xl'>Skills</p>
            <hr className='bg-white my-2' />
            <div >
                {/* Python */}
                <div>
                    <div className='mb-1 text-base font-medium'>Python</div>
                </div>
                <div className='w-full bg-green-900 h-1.5 rounded-full mb-2'>
                    <div className='bg-yellow-500 h-1.5 rounded-full w-5/6'></div>
                </div>

                {/* Django */}
                <div>
                    <div className='mb-1 text-base font-medium'>Django</div>
                </div>
                <div className='w-full bg-green-900 h-1.5 rounded-full mb-2'>
                    <div className='bg-yellow-500 h-1.5 rounded-full w-5/6'></div>
                </div>

                {/* JS */}
                <div>
                    <div className='mb-1 text-base font-medium'>JavaScript</div>
                </div>
                <div className='w-full bg-green-900 h-1.5 rounded-full mb-2'>
                    <div className='bg-yellow-500 h-1.5 rounded-full w-4/6'></div>
                </div>

                {/* React */}
                <div>
                    <div className='mb-1 text-base font-medium'>React JS</div>
                </div>
                <div className='w-full bg-green-900 h-1.5 rounded-full mb-2'>
                    <div className='bg-yellow-500 h-1.5 rounded-full w-4/6'></div>
                </div>

                {/* Docker */}
                <div>
                    <div className='mb-1 text-base font-medium'>Docker</div>
                </div>
                <div className='w-full bg-green-900 h-1.5 rounded-full mb-2'>
                    <div className='bg-yellow-500 h-1.5 rounded-full w-4/6'></div>
                </div>

                {/* AWS Cloud */}
                <div>
                    <div className='mb-1 text-base font-medium'>AWS Cloud</div>
                </div>
                <div className='w-full bg-green-900 h-1.5 rounded-full mb-2'>
                    <div className='bg-yellow-500 h-1.5 rounded-full w-3/6'></div>
                </div>
            </div>

            {/* Achievement Section */}
            <p className='font-semibold text-left mt-5 text-2xl'>Achievements</p>
            <hr className='bg-white my-2' />

            <div className='flex items-center mx-0'>
                <div className='flex flex-col items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                    <p className='text-center text-sm'>Winner Typing Competition</p>
                </div>

                {/* Fiverr */}
                <div className='flex flex-col items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                    <p className='text-center text-sm'>Level 2 Seller at Fiverr</p>
                </div>
            </div>


        </div>
    </>
  )
}

export default Sidebar