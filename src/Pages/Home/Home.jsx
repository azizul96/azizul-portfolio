import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";
import About from "../About/About";
import Contact from "../Contact/Contact";


const Home = () => {
    return (
        <div >
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <About></About>
            </div>
            <div>
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;