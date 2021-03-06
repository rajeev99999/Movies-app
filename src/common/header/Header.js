import React, {Component} from 'react'
import './Header.css'
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class Header extends Component{

    constructor(){
        super();
        this.state={
            moadalIsOpen:false,
            value:0
        }
    }

    openModalHandler = () =>{
        this.setState({
            moadalIsOpen: true
        });
    }

    closeModalHandler = () =>{
        this.setState({
            moadalIsOpen:false
        });
    }

    tabChangeHandler = (event,value) =>{
        this.setState({value});
    }
    render(){

        return(
            <div>
            <header className="app-header">
                <img src={logo} className="app-logo" alt="logo"/>
                <div className="login-button">
                    <Button variant="contained" color="default" onClick={this.openModalHandler}>Login</Button>
                </div>
            </header>
            <Modal  ariaHideApp={false} isOpen={this.state.moadalIsOpen} contentLabel="Login" onRequestClose={this.closeModalHandler} >
                <Tabs value={this.state.value} onChange={this.tabChangeHandler}>
                    <Tab label="Login"/>
                    <Tab label="register"/>
                        
                </Tabs>
            </Modal>
            </div>
        );
    }
}

export default Header;