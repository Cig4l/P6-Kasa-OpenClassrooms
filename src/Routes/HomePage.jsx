import Banner from "../Components/Banner";
import Layout from "../Layout";
import Gallery from "../Components/Gallery";

export default function HomePage(){
    const children = (<>
        <Banner /> 
        <Gallery />
    </>);

    return (<>
        <Layout children={children} />
    </>);
}