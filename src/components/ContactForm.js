import React from "react"


class ContactForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {showModal: false};  

        this.handleButtonClick = this.handleButtonClick.bind(this)
    }

    handleButtonClick(){
        this.setState({
            showModal: !this.state.showModal
        })
    }

    render(){

        const button = <button class="button is-dark" onClick={this.handleButtonClick}>Contact Us</button>; 

        const form = <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                <p class="modal-card-title">Contact Us</p>
                <button class="delete" aria-label="close" onClick={this.handleButtonClick}></button>
                </header>
                <section class="modal-card-body">
                    <ul>
                        <li>Call us: <a href="tel:2063690908">206.369.0908</a> </li>
                        <li>Text us: <a href="sms:2063690908">206.369.0908</a></li>
                        <li>Email us: <a href="mailto:henryrose@gmail.com">henryrose@gmail.com</a></li>
                    </ul>

                </section>
                <footer class="modal-card-foot">
                
                </footer>
            </div>
            <button class="modal-close is-large" onClick={this.handleButtonClick} aria-label="close"></button>
        </div>

        const out = this.state.showModal ? form : button; 

        return out; 
    }
}

export default ContactForm