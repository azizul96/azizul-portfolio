/* eslint-disable react/no-unescaped-entities */

const Banner = () => {
    return (
        <header className="pt-28 pb-10 mb-10 ">
            <div className="container  mx-auto ">
                <div className="items-center md:flex md:flex-row-reverse gap-10 ">
        
                    <div className="flex items-center justify-end w-full mt-5  lg:w-1/2">
                        <img className="w-full md:w-96 h-full lg:max-w-xl rounded-full shadow-xl shadow-orange-400" style={{backgroundColor: "#ff7a57" }} src="/azizul.png" alt="Catalogue-pana.svg"/>
                    </div>

                    <div className="w-full lg:w-1/2 mt-5">
                        <div className="lg:max-w-lg text-center md:text-left">
                            <p className="text-lg font-semibold">Hello, I'm</p>
                            <h1 className="text-4xl font-bold "> Azizul Islam</h1>
                            <a  href="https://github.com/Ratheshan03/readme-typing-svg"><img src="https://readme-typing-svg.herokuapp.com?lines=Frontend+Developer;With+Expertise+In;JS+React+Tailwind+MongoDB+ExpressJS;&center=false&width=500&height=50"/></a>
                            
                            <a href="https://drive.google.com/u/0/uc?id=1tpAL-rFPzH_6ae_YBNTgwh_DA-MV37Us&export=download" download="resume.pdf">
                                <button className="btn btn-error px-5 py-2 mt-6 text-lg text-white  bg-[#ff7a57] rounded-full font-semibold shadow-lg shadow-orange-500 border-none" >Download Resume</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Banner;