import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

export default function Layout (props) {
    const children = props.children;
    return (<>
        <main className="main-container">
            <div className="main-margins">
            <NavBar />
            {children}
            </div>
        </main>
        <Footer />
    </>)
}