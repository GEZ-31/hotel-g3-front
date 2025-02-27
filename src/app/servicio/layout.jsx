
import * as React from 'react';
import Footer from "../components/footer";
import Header from "../components/header/header";




export const metadata = {
    title: "Servicios",
    description: "Generated by create next app",
};

export default function ServiceLayout({ children }) {
    return (
        <div>
            <Header bannerImg='banners/banner-service.jpg'></Header>
            {children}
            <Footer></Footer>
        </div>
    );

}
