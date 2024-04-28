import Layout from "../Layout";
import Produit from "/src/Components/Produit.jsx";

export default function FicheProduit(props){
    const properties = props;
    console.log(properties);
    const children = (<>
        <Produit props={properties}/>
    </>);

    return (<>
        <Layout children={children} />
    </>);
}
