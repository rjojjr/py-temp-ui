import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import {Link} from "react-router-dom";

export const HomeNavBar = () => {
    return (
        <React.Fragment>
            <div className={"container-fluid"} id={"homeNav"}>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand as={Link} to="/">Py Temp</Navbar.Brand>
                    <Nav className="mr-auto">
                        <NavDropdown title="Bot" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/" id={"summaryLink"}>Summary</NavDropdown.Item>

                        </NavDropdown>
                    </Nav>
                </Navbar>
            </div>
        </React.Fragment>
    )
}