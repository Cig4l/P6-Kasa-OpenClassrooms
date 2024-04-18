import Layout from "../Layout";
import Produit from "/src/Components/Produit.jsx";

export default function FicheProduit(){
    const children = (<>
        <Produit />
    </>);

    return (<>
        <Layout children={children} />
    </>);
}
