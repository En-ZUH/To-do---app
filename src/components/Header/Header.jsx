import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

function NavBar(props) {


    return (


        <Navbar bg="primary" variant="primary" expand="lg"
            style={{
                marginBottom: "25px", padding: "20px", backgroundColor: "rgb(34,123,255)"
            }}
        >
            <Link to='/' style={{ padding: "15px", color: "white" }}>Home</Link>
            <Link to='/settings' style={{ padding: "15px", color: "white" }}>Settings</Link>
        </Navbar>



    )
}

export default NavBar