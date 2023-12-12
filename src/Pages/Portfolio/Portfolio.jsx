import { GiCheckMark } from "react-icons/gi";

const Portfolio = () => {
    return (
        <div className="pt-20 pb-10 mb-10">
            <h1 className=" text-3xl text-center font-bold mb-10 text-[#ff7a57]">{`< Projects />`}</h1>
            <section className="mt-8 space-y-8 lg:mt-12">
                        <div className="lg:flex lg:items-center lg:gap-10 mb-10">
                            <div className="mt-4 lg:w-1/2 lg:mt-0">
                                <img className="w-full h-full rounded-lg md:h-96"
                                    src="/p1.png"
                                    alt=""/>
                            </div>
                            <div className="lg:w-1/2 ">
                                <h1 className="text-2xl font-semibold my-3 ">Employee Management System</h1>
                                <p className="mb-6">This Employee Management System is a full-stack single page web application. <br />It includes the following features.</p>
                                
                                <div className="flex justify-start items-center gap-2 mb-1">
                                    <p className="text-lg text-green-700"><GiCheckMark /></p>
                                    <p>JWT Based Authentication</p>
                                </div>
                                <div className="flex justify-start items-center gap-2 mb-1">
                                    <p className="text-lg text-green-700"><GiCheckMark /></p>
                                    <p>User Role Specific Dashboard</p>
                                </div>
                                <div className="flex justify-start items-center gap-2 mb-1">
                                    <p className="text-lg text-green-700"><GiCheckMark /></p>
                                    <p>Payment Method</p>
                                </div>
                                <div className="flex justify-between items-center gap-2 mt-5">
                                    <span className="text-sm font-semibold text-blue-600 "><a href="https://wondrous-selkie-9e7aff.netlify.app/">Live-Site</a></span>
                                    <span className="text-sm font-semibold text-blue-600 "><a href="https://github.com/azizul96/employee-management-system-client">Frontend-Code</a></span>
                                    <span className="text-sm font-semibold text-blue-600 "><a href="https://github.com/azizul96/employee-management-system-server">Backend-Code</a></span>
                                </div>
                            </div>
                        </div>
                        <div className="lg:flex lg:items-center lg:gap-10 mb-10">
                            <div className="mt-4 lg:w-1/2 lg:mt-0">
                                <img className="w-full h-full rounded-lg md:h-96"
                                    src="/p2.png"
                                    alt=""/>
                            </div>
                            <div className="lg:w-1/2 ">
                                <h1 className="text-2xl font-semibold my-3 ">Event Venue Booking Website</h1>
                                <p className="mb-6">This Event Venue Booking Website is a fully responsive single page web application. <br />It includes the following features.</p>
                                
                                <div className="flex justify-start items-center gap-2 mb-1">
                                    <p className="text-lg text-green-700"><GiCheckMark /></p>
                                    <p>Firebase Authentication</p>
                                </div>
                                <div className="flex justify-start items-center gap-2 mb-1">
                                    <p className="text-lg text-green-700"><GiCheckMark /></p>
                                    <p>Login With Google Or Email & Password</p>
                                </div>
                                <div className="flex justify-start items-center gap-2 mb-1">
                                    <p className="text-lg text-green-700"><GiCheckMark /></p>
                                    <p>Event Booking System</p>
                                </div>
                                <div className="flex justify-between items-center gap-2 mt-5">
                                    <span className="text-sm font-semibold text-blue-600 "><a href="https://heartfelt-crostata-660c81.netlify.app/">Live-Site</a></span>
                                    
                                    <span className="text-sm font-semibold text-blue-600 "><a href="https://github.com/azizul96/event-management-09">Frontend-Code</a></span>

                                    <span className="text-sm font-semibold text-blue-600 "><a href=""></a></span>
                                </div>
                            </div>
                        </div>
                        <div className="lg:flex lg:items-center lg:gap-10 mb-10">
                            <div className="mt-4 lg:w-1/2 lg:mt-0">
                                <img className="w-full h-full rounded-lg md:h-96"
                                    src="/p3.png"
                                    alt=""/>
                            </div>
                            <div className="lg:w-1/2 ">
                                <h1 className="text-2xl font-semibold my-3 ">Hotel Management Website</h1>
                                <p className="mb-6">This Hotel Management Website is a full-stack single page web application. <br />It includes the following features.</p>
                                
                                <div className="flex justify-start items-center gap-2 mb-1">
                                    <p className="text-lg text-green-700"><GiCheckMark /></p>
                                    <p>JWT Based Authentication</p>
                                </div>
                                <div className="flex justify-start items-center gap-2 mb-1">
                                    <p className="text-lg text-green-700"><GiCheckMark /></p>
                                    <p>Booking System - User can booked or cancel hotel rooms</p>
                                </div>
                                <div className="flex justify-start items-center gap-2 mb-1">
                                    <p className="text-lg text-green-700"><GiCheckMark /></p>
                                    <p>Review System - User can post reviews</p>
                                </div>
                                <div className="flex justify-between items-center gap-2 mt-5">
                                    <span className="text-sm font-semibold text-blue-600 "><a href="https://hotel-booking-3b71d.web.app/">Live-Site</a></span>
                                    
                                    <span className="text-sm font-semibold text-blue-600 "><a href="https://github.com/azizul96/hotel-booking-client">Frontend-Code</a></span>

                                    <span className="text-sm font-semibold text-blue-600 "><a href="https://github.com/azizul96/hotel-booking-server">Backend-Code</a></span>
                                </div>
                            </div>
                        </div>
            </section> 
        </div>
    );
};

export default Portfolio;