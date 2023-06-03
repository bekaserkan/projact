import React from "react";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import Main from "../../../pages/main/main";
import { Route, Routes } from "react-router-dom";

export function Layout () {
    return (
        <div className="layout">
            <Header/>
            <Routes>
                <Route path="/" element={ <Main/> } />
            </Routes>
            <Footer/>
        </div>
    )
}