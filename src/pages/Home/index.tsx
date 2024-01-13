import { Banner } from "../../components/Banner";
import { Catalog } from "../../components/Catalog";
import { Header } from "../../components/Header";

export function Home(){
    return(
        <>
            <Header/>
            <Banner/>
            <Catalog/>
        </>
    )
}