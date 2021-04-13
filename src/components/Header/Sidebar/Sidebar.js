import React from 'react';
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { CgCloseO } from "react-icons/cg";
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";


const Sidebar = ({ props }) => {

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }
    return (
        <div className="sidebar">
            <div className="icon">
                <div className="closeIcon">
                    <a href="!#" onClick={goBack}><CgCloseO/></a>
                </div>
            </div>
            <div className="sidebarContent">
                <div className="sidebarManu">
                    <NavLink to="/" exact activeClassName={"activeSideLink"} className="sidebarLink">Home</NavLink>
                    <NavLink to="/about" activeClassName={"activeSideLink"} className="sidebarLink">About</NavLink>
                    <NavLink to="/accounts" activeClassName={"activeSideLink"} className="sidebarLink">Accounts</NavLink>
                    <NavLink to="/add" activeClassName={"activeSideLink"} className="sidebarLink">AddAccount</NavLink>
                    <NavLink to="/edit" activeClassName={"activeSideLink"} className="sidebarLink">Edit/Delete</NavLink>
                    <NavLink to="/something" activeClassName={"activeSideLink"} className="sidebarLink">Something</NavLink>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Sidebar);