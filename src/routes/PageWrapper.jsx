import { Outlet } from "react-router"

import Header from "../components/Header";
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import BurgerMenu from "../components/BurgerMenu";
import { useSelector } from "react-redux";

const PageWrapper = () => {
    const burgerIsVisible = useSelector(state => state.burger.isVisible)

    return (
        <>
            <Header />
            {burgerIsVisible && <BurgerMenu/>}
            <Divider dividerType='top' dividerNumber={1} />
            <Outlet />
            <Footer/>
        </>
    )
}

export default PageWrapper;