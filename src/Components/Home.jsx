import AboutUs from "./AboutUs";
import Banner from "./Banner";
import CallAction from "./CallAction";
import PetsCategory from "./PetsCategory";
import CreateSection from "./CreateSection";
import Experience from "./Experience";
import One from "./One";
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PetsCategory></PetsCategory>
            <CallAction></CallAction>
            <AboutUs></AboutUs>
            <CreateSection></CreateSection>
            <One></One>
            <Experience></Experience>
        </div>
    );
};

export default Home;