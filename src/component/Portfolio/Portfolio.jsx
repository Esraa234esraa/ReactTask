import { useRef } from 'react';
import React, { useState } from 'react';
import port1 from '../../assets/port1.png';
import port2 from '../../assets/port2.png';
import port3 from '../../assets/port3.png';

function Portfolio() {
    const [selectedImage, setSelectedImage] = useState(null);
    const modalRef = useRef(null);

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            closeModal();
        }
    };

    return (
        <>
            <div className="portfolio" onClick={handleClickOutside}>
                <div className="relative top-36 mb-[12rem] ">
                    <div className="md:w-[90%] w-[80%] mx-auto flex text-gray-700 flex-col lg:flex-row lg:flex-wrap justify-center items-center gap-5 relative top-[30%] lg:top-[40%]">
                        <div className="header flex flex-col justify-center items-center">
                            <h2 className="uppercase text-4xl font-bold mb-3">portfolio component</h2>
                            <div className="flex gap-5 items-center ">
                                <div className="line bg-gray-700 h-1 ms-10 w-[6rem]"></div>
                                <i className="fa fa-star"></i>
                                <div className="line bg-gray-700 h-1 me-10 w-[6rem]"></div>
                            </div>
                        </div>
                        <div className="imgs w-full flex gap-[2rem] mt-3 cursor-pointer flex-col md:flex-row md:flex-wrap justify-center">
                            <div className="img w-full lg:w-[30%] md:w-[45%] relative rounded-xl overflow-hidden" onClick={() => handleImageClick(port1)}>
                                <img className="rounded-xl w-full" src={port1} alt="port1" />
                                <div className="layout absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                                    <i className='text-white text-7xl fa fa-plus'></i>
                                </div>
                            </div>
                            <div className="img lg:w-[30%] md:w-[45%] relative rounded-xl overflow-hidden" onClick={() => handleImageClick(port2)}>
                                <img className="rounded-xl w-full" src={port2} alt="port1" />
                                <div className="layout absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                                    <i className='text-white text-7xl fa fa-plus'></i>
                                </div>
                            </div>
                            <div className="img lg:w-[30%] md:w-[45%] relative rounded-xl overflow-hidden" onClick={() => handleImageClick(port3)}>
                                <img className="rounded-xl w-full" src={port3} alt="port1" />
                                <div className="layout absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                                    <i className='text-white text-7xl fa fa-plus'></i>
                                </div>
                            </div>
                            <div className="img w-full lg:w-[30%] md:w-[45%] relative rounded-xl overflow-hidden" onClick={() => handleImageClick(port1)}>
                                <img className="rounded-xl w-full" src={port1} alt="port1" />
                                <div className="layout absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                                    <i className='text-white text-7xl fa fa-plus'></i>
                                </div>
                            </div>
                            <div className="img lg:w-[30%] md:w-[45%] relative rounded-xl overflow-hidden" onClick={() => handleImageClick(port2)}>
                                <img className="rounded-xl w-full" src={port2} alt="port1" />
                                <div className="layout absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                                    <i className='text-white text-7xl fa fa-plus'></i>
                                </div>
                            </div>
                            <div className="img lg:w-[30%] md:w-[45%] relative rounded-xl overflow-hidden" onClick={() => handleImageClick(port3)}>
                                <img className="rounded-xl w-full" src={port3} alt="port1" />
                                <div className="layout absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                                    <i className='text-white text-7xl fa fa-plus'></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {selectedImage && (
                    <div id="fixed-box" className="model fixed inset-0 bg-blue-200/25 flex justify-center items-center" onClick={closeModal}>
                        <img ref={modalRef} alt="" src={selectedImage} className="relative w-[80%] md:w-[45%]" />
                    </div>
                )}
            </div>
        </>
    );
}

export default Portfolio;
