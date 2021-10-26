import React from 'react';
import Navbar from '../components/Navbar';


const Header = ({ currentPage, handlePageChange }) => {
    return (
        <>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
        </>
    )
}

export default Header