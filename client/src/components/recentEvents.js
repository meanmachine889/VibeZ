import React,{Fragment} from "react";
import pic1 from "./static/krsnapic2.jpg"
import pic2 from "./static/pic1.jpeg";
import pic3 from "./static/concertpic1.jpg"
import pic4 from "./static/concertpic2.jpg"
import pic5 from "./static/danny-howe-bn-D2bCvpik-unsplash.jpg"

function recentEvents(){
    return(
        <Fragment>
            <div className="flex justify-center items-center p-4 gap-4 bg-gradient-to-b from-base-100 to-black" id="recentEvents">
                <div className="w-[30%] flex flex-col justify-center items-left gap-5 mx-7">
                    <div className="flex flex-col justify-center gap-0 p-0 m-0">
                    <h2 className="text-5xl font-bold pl-2">Recent</h2>
                    <h2 className="mb-5 text-8xl font-bold"><span className="gradient-textf animate-gradient">Event</span></h2>
                    <p className="text-white pl-2">Dive into the scroll and catch up on our latest events – the excitement you're missing awaits in our community.</p>
                    </div>
                    <p className="pl-2">Cover : Krsna Live at Revels, MIT Manipal</p>
                </div>
                <div className="w-[53%] h-[55vh] carousel rounded-box mt-5">
                    <div className="carousel-item w-full">
                        <img src={pic1} className="w-full" alt="Tailwind CSS Carousel component" />
                    </div> 
                    <div className="carousel-item w-full">
                        <img src={pic2} className="w-full" alt="Tailwind CSS Carousel component" />
                    </div> 
                    <div className="carousel-item w-full">
                        <img src={pic3} className="w-full" alt="Tailwind CSS Carousel component" />
                    </div> 
                    <div className="carousel-item w-full">
                        <img src={pic4} className="w-full" alt="Tailwind CSS Carousel component" />
                    </div> 
                    <div className="carousel-item w-full">
                        <img src={pic5} className="w-full" alt="Tailwind CSS Carousel component" />
                    </div> 
                    <div className="carousel-item w-full">
                        <img src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full" alt="Tailwind CSS Carousel component" />
                    </div> 
                    <div className="carousel-item w-full">
                        <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full" alt="Tailwind CSS Carousel component" />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default recentEvents;