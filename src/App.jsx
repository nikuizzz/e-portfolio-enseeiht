import {
    Background,
    Header,
    Landing,
    EngineeringCourse,
    International,
    CivicEngagement,
    CareerDevelopment,
    Other,
    Footer,
    Strings
} from "@/exports";
import Favicon from "react-favicon";
const App = () => {
    return (
        <>
            <Favicon url={Strings.images.logo} />
            <Background />
            <Header />
            <Landing />
            <EngineeringCourse />
            <International />
            <CivicEngagement />
            <CareerDevelopment />
            <Other />
            <Footer />
        </>
    );
};

export default App;
