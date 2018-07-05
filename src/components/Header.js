import React from "react";
import '../css/Header.css';

class Header extends React.Component{
    render(){
        return(
        <div> 
            <div className="header"> Snowball app </div>
            <div className="web-sentence"> Buy your dreams </div>
        </div>
        );
    }
}

export default Header;