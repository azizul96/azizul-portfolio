import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Portfolio from "../Portfolio/Portfolio";
import Skill from "../Skill/Skill";


const Home = () => {
    return (
        <div >
            <div>
                <Navbar></Navbar>
            </div>
            
            <div id="banner" className="px-4">
                <Banner></Banner>
            </div>
            <div id="about" className="px-4" >
                <About></About>
            </div>
            <div id="skill" className="px-4">
                <Skill></Skill>
            </div>
            <div id="portfolio" className="px-4">
                <Portfolio></Portfolio>
            </div>
            <div id="education" className="px-4">
                <Education></Education>
            </div>
            <div id="contact" className="px-4">
                <Contact></Contact>
            </div>
            <div className="px-4">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;