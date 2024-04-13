import { Outlet } from "react-router"

import Header from "../components/Header";
import Divider from "../components/Divider";
import Footer from "../components/Footer";

const PageWrapper = () => {
    return (
        <>
            <Header />
            <Divider dividerType='top' dividerNumber={1} />
            <Outlet />
            <Footer/>
        </>
    )
}

export default PageWrapper;