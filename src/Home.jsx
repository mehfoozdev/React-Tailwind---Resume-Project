import React from 'react'

const Home = () => {
  return (
    <>
        <h1 className='text-4xl font-bold mt-6 text-center text-green-800'>Mr. Mehfooz Ali</h1>
        <p className='font-semibold text-center mt-1'>Software Engineer | Freelancer </p>

        {/* Summary */}
        <div className='mx-5 mt-2'>
            <p className='text-gray-50 font-semibold bg-green-800 p-2 mb-1'>Summary</p>
            <p className='leading-6 tracking-wide ml-5'>
                I hold a first-class degree in Computer Science, backed by strong research and analytical capabilities. With a
                passion for innovation and a keen interest in pursuing a career in research and academia, I am committed to
                making significant contributions to the field. My experience includes working collaboratively in team
                environments and demonstrating adaptability as a fast learner.
            </p>
        </div>

        {/* Experience */}
        <div>
            <p className='text-gray-50 font-semibold bg-green-800 p-2 mx-5 mt-3'>Work Experience</p>

            {/* UGS */}
            <div className='flex items-center gap-1 mt-2 mx-5 '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-800">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <p className='font-semibold'>United Global Solutions (UGS)</p>
            </div>
            <p className='ml-12 mb-3'>Jr. Backend Developer (2023 - Current)</p>

            {/* Freelancer */}
            <div className='flex items-center gap-1 mt-2 mx-5 '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-800">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <p className='font-semibold'>Fiverr & Upwork (Remote)</p>
            </div>
            <p className='ml-12 mb-3'>Software Engineer (2022 - Current)</p>

            {/* EduEaze */}
            <div className='flex items-center gap-1 mt-2 mx-5 '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-800">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <p className='font-semibold'>EduEaze NEP NIC </p>
            </div>
            <p className='ml-12 mb-3'>Jr. AI Developer (2023 - 2023)</p>

            {/* EduEaze */}
            <div className='flex items-center gap-1 mt-2 mx-5 '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-800">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <p className='font-semibold'>Google Developer Student Club SMIU</p>
            </div>
            <p className='ml-12 mb-3'>External Team Manager (2022 - 2023)</p>

        </div>

        {/* Education */}
        <div>
            <p className='text-gray-50 font-semibold bg-green-800 p-2 mx-5 mt-3'>Education</p>

            {/* CS */}
            <div className='flex items-center gap-1 mt-2 mx-5 '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>

                <p className='font-semibold'>Sindh Madressatul Islam University (SMIU), Karachi</p>
            </div>
            <p className='ml-12 mb-3'>Bachelor in Computer Science  (2020 - 2024)</p>

        </div>

         {/* Courses */}
         <div>
            <p className='text-gray-50 font-semibold bg-green-800 p-2 mx-5 mt-3'>Courses & Trainings</p>

            {/* PIAIC */}
            <div className='flex items-center gap-1 mt-2 mx-5 '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-800">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <p className='font-semibold'>Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</p>
            </div>
            <p className='ml-12 mb-3'>Certified AI Engineer (2023 - 2024)</p>

            {/* Django */}
            <div className='flex items-center gap-1 mt-2 mx-5 '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-800">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <p className='font-semibold'>Mosh Academy for Developers</p>
            </div>
            <p className='ml-12 mb-3'>Certified Django Backend Developer (2023 - 2023)</p>


            
        </div>

    </>
  )
}

export default Home