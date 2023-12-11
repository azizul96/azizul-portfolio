
const Banner = () => {
    return (
        <header className="pt-28 pb-10 mb-10 ">
            <div className="container  mx-auto ">
                <div className="items-center lg:flex lg:flex-row-reverse gap-5 ">
        
                    <div className="flex items-center justify-center w-full mt-5  lg:w-1/2">
                        <img className="w-full md:w-96 h-full lg:max-w-xl rounded-full shadow-xl" style={{backgroundColor: "#ff7a57" }} src="/public/azizul.png" alt="Catalogue-pana.svg"/>
                    </div>

                    <div className="w-full lg:w-1/2 mt-5">
                        <div className="lg:max-w-lg text-center lg:text-left">
                            <h1 className="text-3xl font-bold lg:text-4xl">Azizul Islam</h1>
                            <a  href="https://github.com/Ratheshan03/readme-typing-svg"><img src="https://readme-typing-svg.herokuapp.com?lines=Frontend+Developer;With+Expertise+In;JS+React+Tailwind+MongoDB+ExpressJS;&center=false&width=500&height=50"/></a>
                            {/* <p className="mt-3 text-gray-600 dark:text-gray-400">Frontend Web Developer</p> Frontend Developer with expertise in HTML, CSS, Tailwind,*/}
                            <a href="https://drive.google.com/u/0/uc?id=1tpAL-rFPzH_6ae_YBNTgwh_DA-MV37Us&export=download" download="resume.pdf">
                                <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white  transition-colors duration-300 transform bg-[#ff7a57] rounded-full lg:w-auto font-semibold" >Download Resume</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Banner;