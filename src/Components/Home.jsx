import AboutUs from "./AboutUs";
import Banner from "./Banner";
import CallAction from "./CallAction";
import PetsCategory from "./PetsCategory";
import CreateSection from "./CreateSection";
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PetsCategory></PetsCategory>
            <CallAction></CallAction>
            <AboutUs></AboutUs>
            <CreateSection></CreateSection>
            
        </div>
    );
};

export default Home;