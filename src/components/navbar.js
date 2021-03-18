import React from "react"

import {Link} from "gatsby"

import LogoImage from "../components/logoimage"


const Navbar = ({ }) => (
    <section className="section">
        <div className="container">

        
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <div style={{
                            height: "28px",
                            width: "112px"
                        }}>
                            <LogoImage />
                        </div>
                    </a>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <Link to="/" className="navbar-item">Home</Link>
                        <Link to="/van" className="navbar-item">Van for Sale</Link>
                    </div>
                </div>
            </nav>
        </div>
    </section>
);

export default Navbar;