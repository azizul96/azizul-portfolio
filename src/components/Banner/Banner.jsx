
const Banner = () => {
    return (
        <header id="banner" className=" dark:bg-gray-900">
            <div className="container lg:pt-24 py-10 mx-auto">
                <div className="items-center lg:flex lg:flex-row-reverse gap-5 ">
        
                    <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                        <img className="w-full h-full lg:max-w-xl rounded-full shadow-xl" style={{backgroundColor: "#e76f51" }} src="/public/azizul.png" alt="Catalogue-pana.svg"/>
                    </div>

                    <div className="w-full lg:w-1/2 mt-5">
                        <div className="lg:max-w-lg text-center lg:text-left">
                            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Azizul Islam</h1>
                            
                            <p className="mt-3 text-gray-600 dark:text-gray-400">Frontend Web Developer</p>
                            
                            <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white  transition-colors duration-300 transform bg-[#ff7a57] rounded-full lg:w-auto font-semibold">Download Resume</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Banner;