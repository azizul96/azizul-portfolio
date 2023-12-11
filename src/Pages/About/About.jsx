
const About = () => {
    return (
        <div className="container mx-auto py-20 ">
            <h1 className=" text-3xl text-center font-semibold mb-10 lg:mb-20 text-orange-500">{`< About Me />`}</h1>
            <div className="flex flex-col md:flex-row justify-start gap-5">
                <div >
                    <img className="w-full h-full md:rounded-full" src="/public/my.gif" alt="" />
                </div>
                <div className="mt-5">
                    <h1 className="text-2xl font-semibold mb-1 ">Azizul Islam</h1>
                    <p className="mb-5 text-sm">Frontend Web Developer</p>
                    <p className="text-base">Results-driven Frontend Developer with expertise in HTML, CSS, Tailwind, and React, complemented by backend proficiency in MongoDB. Adept at creating visually stunning and responsive web applications with a focus on user experience. Passionate about utilizing innovative technologies to deliver high-quality, scalable solutions.</p>
                    <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white  transition-colors duration-300 transform bg-[#ff7a57] rounded-full lg:w-auto font-semibold">Download Resume</button>
                </div>
            </div>
        </div>
    );
};

export default About;