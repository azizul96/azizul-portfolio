import toast from 'react-hot-toast';
import { MdLocationPin, MdPhoneInTalk, MdEmail } from 'react-icons/md';

const Contact = () => {

    const handleContact = e =>{
        e.preventDefault()
        toast.success('Successfully toasted!')
    }
    return (
        <div className="pt-24 pb-10 mb-10 lg:mb-16">
            <h1 className=" text-3xl text-center font-bold text-[#ff7a57] mb-10">{`< Contact  />`}</h1>
            <div className="container  mx-auto">
                <div className="lg:flex lg:items-center lg:-mx-6">
                    <div className="lg:w-1/2 lg:mx-6">
                        <p>Available 24/7</p>
                        <h1 className="text-2xl font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl">
                            Get In Touch
                        </h1>

                        <div className="mt-6 space-y-8 md:mt-8">
                            <p className="flex items-start -mx-2">
                                <MdLocationPin className="text-2xl text-[#ff7a57] "/>

                                <span className="mx-2 text-gray-700  w-72 dark:text-gray-400">
                                Rupatali, Barishal-8200, Bangladesh
                                </span>
                            </p>

                            <p className="flex items-start -mx-2">
                                <MdPhoneInTalk className="text-2xl text-[#ff7a57]"/>

                                <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">+880 1303 674855</span>
                            </p>

                            <p className="flex items-start -mx-2">
                                <MdEmail className="text-2xl text-[#ff7a57]"/>

                                <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">azizulislam53468@gmail.com</span>
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 lg:w-1/2 lg:mx-6">
                        <div
                            className="border-2 w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
                            

                            <form onSubmit={handleContact} className="mt-6">
                                <div className="flex-1">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                                    <input type="text" placeholder="John Doe" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" required />
                                </div>

                                <div className="flex-1 mt-6">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                                    <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" required />
                                </div>

                                <div className="w-full mt-6">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                                    <textarea className="block w-full h-20 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-20 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message" required ></textarea>
                                </div>

                                <button className="w-full px-6 py-3 mt-6  tracking-wide text-white capitalize btn btn-error bg-[#ff7a57] rounded-md font-semibold shadow-lg shadow-orange-500 ">
                                    get in touch
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;