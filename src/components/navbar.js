import React from "react"

import {Link} from "gatsby"

import LogoImage from "../components/logoimage"


class Navbar extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            burgerIsActive : false
        }

        this.handleBurgerClick = this.handleBurgerClick.bind(this)
    }

    handleBurgerClick(e){
        this.setState({
            burgerIsActive: true
        })
    };

    render() {

        const burgerClassName = 'navbar-burger' + (this.state.burgerIsActive ? ' is-active' : ''); 
        const navbarMenuClassname = 'navbar-menu' + (this.state.burgerIsActive ? ' is-active' : ''); 
        return (
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
        
                            <a role="button" className={burgerClassName} onClick={this.handleBurgerClick} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </a>
                        </div>
        
                        <div id="navbarBasicExample" className={navbarMenuClassname}>
                            <div className="navbar-start">
                                <Link to="/" className="navbar-item">Home</Link>
                                <Link to="/van" className="navbar-item">Van (SOLD!)</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>
        )
    }
}

export default Navbar;