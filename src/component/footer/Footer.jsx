import React from 'react'

export default function Footer() {
    return (
        <footer className="footer">
            <div className='bg-gray-700 md:h-[40vh]  flex pb-20'>

                <div className="w-[85%] gap-10 pt-10 md:pt-0 mx-auto flex md:flex-row flex-col md:justify-between text-center md:items-center">
                    <div className="location">
                        <h2 className="text-white text-2xl font-bold mb-4">Location</h2>
                        <p className="text-white md:text-lg">2215 John Daniel Drive

                        </p>
                        <span className='text-white lg:text-lg'>Clark, MO 65243</span>
                    </div>
                    <div className="about-web text-white flex flex-col justify-center items-center ">
                        <h3 className="text-white text-2xl font-bold mb-4">AROUND THE WEB</h3>
                        <div className="icons  flex md:flex-row flex-wrap gap-2   items-center">
                            <span className='border w-10 h-10 flex items-center justify-center rounded-full'>
                                <i className="fab fa-facebook-f"></i>
                            </span>
                            <span className='border w-10 h-10 flex items-center justify-center rounded-full'>
                                <i className="fab fa-twitter"></i>
                            </span>
                            <span className='border w-10 h-10 flex items-center justify-center rounded-full'>
                                <i className="fab fa-linkedin-in"></i>
                            </span>
                            <span className='border w-10 h-10 flex items-center justify-center rounded-full'>
                                <i className="fa fa-globe" aria-hidden="true"></i>
                            </span>
                        </div>

                    </div>
                    <div className="freelancer">
                        <h2 className="text-white text-2xl font-bold mb-4">ABOUT FREELANCER</h2>
                        <p className="text-white text-lg">Freelance is a free to use,<br></br> licensed Bootstrap theme created by Route

                        </p>
                    </div>
                </div>

            </div>

            <div className='bg-gray-900 h-[8vh]'>

                <p className="text-white  text-center pt-4">Copyright © Your Website 2021</p>
            </div>
        </footer>
    )
}
