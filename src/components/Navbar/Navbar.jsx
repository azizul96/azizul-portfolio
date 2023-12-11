import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import './Navbar.css'

const Navbar = () => {
    const menu = <>
                <ScrollLink spy={true} smooth={true} duration={1000} to="banner">
                    <li className="font-bold px-4 py-2 cursor-pointer" >Home</li>
                </ScrollLink>
                <ScrollLink spy={true} smooth={true} duration={1000} to="about" >
                    <li className="font-bold px-4 py-2 cursor-pointer">About</li>
                </ScrollLink>
                <ScrollLink spy={true} smooth={true} duration={1000} to="skill" >
                    <li className="font-bold px-4 py-2 cursor-pointer">Skill</li>
                </ScrollLink>
                <ScrollLink spy={true} smooth={true} duration={1000} to="contact">
                    <li className="font-bold px-4 py-2 cursor-pointer">Contact</li>
                </ScrollLink>
                
    
            </>
    return (
        <div className="navbar fixed  bg-base-100 container mx-auto z-10 ">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {menu}
                </ul>
                </div>
                <Link className="text-[#ff7a57] text-2xl font-bold">Azizul</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menu}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;