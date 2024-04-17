import NavBar from "../NavBar";
import Banner from "../Banner";
import Footer from "./Footer";

export default function HomePage(){
    return (<>
        <main className="main-container">
            <NavBar />
            <Banner />
        </main>
        <Footer />
    </>);
}