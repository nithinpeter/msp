import React from "react";
import { connect } from "react-redux";
import menu from "../assets/menu.png"
import avatar from "../assets/avatar.png"

const Header = ({title}) => {
    return <div className="header">
        <img src={menu} alt="menu"/>
        <div>{title}</div>
        <img src={avatar} alt="avatar"/>
    </div>
}  

const mapStateToProps = (state) => {
    return state.topic;
}
export default connect(mapStateToProps)(Header);

