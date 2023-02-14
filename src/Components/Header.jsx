import react, { useState } from 'react';

const headerStyle = {
    // backgroundColor: "#3450A1 ",
    height: "150px",
    marginTop: "10px",
    color: "#ECECEC"
}

const Header = (props) => {
    return (
        <div className='container d-flex align-items-center justify-content-center' style={headerStyle}>
            <h1 className='display-1'>TO DO LIST</h1>
        </div>
    )
    
}

export default Header;