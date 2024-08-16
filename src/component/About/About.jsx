// import React from 'react'

export default function About() {
  return (
    <>
      <div className="bg-teal-500 h-[90vh] lg:h-[95vh]">
        <div className="w-[70%] mx-auto flex text-white flex-col justify-center	items-center gap-5 relative top-[30%] lg:top-[40%]">
          <div className="header flex flex-col justify-center items-center">
            <h2 className="uppercase text-4xl font-bold mb-3">about component
            </h2>
            <div className="flex gap-5 items-center">
              <div className="line bg-white h-1 ms-10 w-[6rem]"></div>
              <i className="fa fa-star"></i>
              <div className="line bg-white h-1 me-10 w-[6rem]"></div>

            </div>
          </div>
          <div className="about-content w-[80%] mt-4 lg:flex gap-5 lg:w-full">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            <br />
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div></div>

      </div>
    </>
  )
}
