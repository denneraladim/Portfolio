import { Outlet } from "react-router-dom";
import Container from "../../Components/Container";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

function PageBase(){
    return (
        <>
        <Header />
        <Container>
            <Outlet />
        </Container>
        <Footer />
        </>
    )
}

export default PageBase;