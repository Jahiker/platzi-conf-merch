import React from 'react';
import '../styles/components/Layout.css';
import Header from './Header';
import Footer from './Footer';

const Year = new Date('Y');

const Layout = ({children}) => {
    return (
        <div className='Main'>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;