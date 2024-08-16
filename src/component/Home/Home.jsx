import { useEffect } from "react";
import { useState } from "react"
import img from '../../assets/avataart.webp'

export function Home() {
    return (<>
        <div className="bg-teal-500 h-[80vh]">

            <div className="container w-[80%] mx-auto pt-[4rem] mt-20">
                <div className="content text-white flex flex-col text-center items-center ">
                    <div className="img w-[20rem]">
                        <img src={img} alt="" />
                    </div>
                    <div className="info">
                        <div className="head mb-5">
                            <h2 className="text-4xl font-bold mb-5">START FRAMEWORK</h2>
                            <div className="flex gap-5 items-center">
                                <div className="line bg-white h-1 ms-10 w-[6rem]"></div>
                                <i className="fa fa-star"></i>
                                <div className="line bg-white h-1 me-10 w-[6rem]"></div>

                            </div>
                        </div>
                        <div>
                            <span>Graphic Artist - Web Designer - Illustrator
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </>)
}
