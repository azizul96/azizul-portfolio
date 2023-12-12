import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer items-center px-4 py-8 text-white bg-[#ff7a57] rounded-sm mb-16 ">
            <aside className="">
                <h1 className="text-2xl font-bold text-white">Azizul</h1>
                <p>Copyright © 2023 - All right reserved</p>
            </aside> 
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <a className="text-3xl" href="https://www.linkedin.com/in/azizul-islam96/"><FaLinkedin /> </a>
                <a className="text-3xl" href="https://www.facebook.com/alifalaminn96"> <FaFacebookSquare /></a>
            </nav>
        </footer>
    );
};

export default Footer;