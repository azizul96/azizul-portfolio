

const Skill = () => {
    return (
        <div className="py-16">
            <h1 className=" text-3xl text-center font-semibold mb-20 text-orange-500">{`< Skills />`}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex justify-center items-center gap-2">
                    <img className="w-24" src="/public/JS.png" alt="" />
                    <input type="range" min={0} max="100" value="80" className="range range-info" />
                </div>
                <div className="flex justify-center items-center gap-2">
                    <img className="w-24" src="/public/HTML5.png" alt="" />
                    <input type="range" min={0} max="100" value="90" className="range range-info" />
                </div>
                <div className="flex justify-center items-center gap-2">
                    <img className="w-24" src="/public/CSS3.png" alt="" />
                    <input type="range" min={0} max="100" value="90" className="range range-info" />
                </div>
                <div className="flex justify-center items-center gap-2">
                    <img className="w-24" src="/public/tailwind.png" alt="" />
                    <input type="range" min={0} max="100" value="90" className="range range-info" />
                </div>
                <div className="flex justify-center items-center gap-2">
                    <img className="w-24" src="/public/ReactJS.png" alt="" />
                    <input type="range" min={0} max="100" value="80" className="range range-info" />
                </div>
                <div className="flex justify-center items-center gap-2">
                    <img className="w-24" src="/public/nodeJS.png" alt="" />
                    <input type="range" min={0} max="100" value="50" className="range range-info" />
                </div>
                <div className="flex justify-center items-center gap-2">
                    <img className="w-24" src="/public/mongoDB.png" alt="" />
                    <input type="range" min={0} max="100" value="70" className="range range-info" />
                </div>
                <div className="flex justify-center items-center gap-2">
                    <img className="w-24" src="/public/expressJS.png" alt="" />
                    <input type="range" min={0} max="100" value="70" className="range range-info" />
                </div>
                
                
            </div>
        </div>
    );
};

export default Skill;