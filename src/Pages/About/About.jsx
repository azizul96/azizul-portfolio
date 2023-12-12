
const About = () => {
    return (
        <div className="container mx-auto pt-20 ">
            <h1 className=" text-3xl text-center font-bold mb-10 lg:mb-20 text-[#ff7a57]">{`< About Me />`}</h1>
            <div className="flex flex-col lg:flex-row justify-start gap-5">
                
                <div className="mt-5">
                    <h1 className="text-3xl font-bold mb-1 ">Azizul Islam</h1>
                    <p className="mb-5 text-base">Frontend Web Developer</p>
                    <p className="text-lg">Results-driven Frontend Developer with expertise in HTML, CSS, Tailwind, and React, complemented by backend proficiency in MongoDB. Adept at creating visually stunning and responsive web applications with a focus on user experience. Passionate about utilizing innovative technologies to deliver high-quality, scalable solutions.</p>
                    <a href="https://www.linkedin.com/in/azizul-islam96/">
                        <button className="btn btn-error px-5 py-2 mt-6 text-lg text-white  bg-[#ff7a57] rounded-full font-semibold shadow-lg shadow-orange-500 border-none">LinkedIn</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;