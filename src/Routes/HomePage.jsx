import Banner from "../Components/Banner";
import Layout from "../SCSS/Layout";

export default function HomePage(){
    const children = <Banner />;
    return (<>
        <Layout children={children} />
    </>);
}