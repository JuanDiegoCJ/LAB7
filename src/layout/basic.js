import './style2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

const Basic = () => {
    return (
        <StrictMode>
            <div className="d-flex flex-column min-vh-100">
                <Header />
                <div className="container flex-grow-1">
                    <div className="row py-5">
                        <Outlet />
                    </div>
                </div>
                <Footer />
            </div>
        </StrictMode>
    );
}

export default Basic;