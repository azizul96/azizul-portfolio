

const Skill = () => {
    return (
        <div className="pt-20 pb-10 mb-10">
            <h1 className=" text-3xl text-center font-bold mb-20 text-[#ff7a57]">{`< Skills />`}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex justify-center items-center gap-2">
                    <img className="w-10 border-2 border-[#ff7a57] rounded-full" src="/JS.png" alt="" />
                    
                    <div className="w-full">
                        <p className="font-semibold">JavaScript</p>
                        <progress className="progress progress-error w-full" value={70} max="100"></progress>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-2">
                    <img className="w-10 border-2 border-[#ff7a57] rounded-full" src="/HTML5.png" alt="" />
                    <div className="w-full">
                        <p className="font-semibold">HTML</p>
                        <progress className="progress progress-error w-full" value={90} max="100"></progress>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <img className="w-10 border-2 border-[#ff7a57] rounded-full" src="/CSS3.png" alt="" />
                    <div className="w-full">
                        <p className="font-semibold">CSS</p>
                        <progress className="progress progress-error w-full" value={90} max="100"></progress>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <img className="w-10 border-2 border-[#ff7a57] rounded-full" src="/tailwind.png" alt="" />
                    <div className="w-full">
                        <p className="font-semibold">Tailwind</p>
                        <progress className="progress progress-error w-full" value={90} max="100"></progress>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <img className="w-10 border-2 border-[#ff7a57] rounded-full" src="/ReactJS.png" alt="" />
                    <div className="w-full">
                        <p className="font-semibold">React</p>
                        <progress className="progress progress-error w-full" value={80} max="100"></progress>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <img className="w-10 border-2 border-[#ff7a57] rounded-full" src="/nodeJS.png" alt="" />
                    <div className="w-full">
                        <p className="font-semibold">Node JS</p>
                        <progress className="progress progress-error w-full" value={50} max="100"></progress>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <img className="w-10 border-2 border-[#ff7a57] rounded-full" src="/mongoDB.png" alt="" />
                    <div className="w-full">
                        <p className="font-semibold">MongoDB</p>
                        <progress className="progress progress-error w-full" value={70} max="100"></progress>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <img className="w-10 border-2 border-[#ff7a57] rounded-full" src="/expressJS.png" alt="" />
                    <div className="w-full">
                        <p className="font-semibold">Express JS</p>
                        <progress className="progress progress-error w-full" value={60} max="100"></progress>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;