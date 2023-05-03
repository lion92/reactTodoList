import React from 'react';
import {NavLink} from "react-router-dom";
import Helloword from "./Helloword";

const Navigation = () => {
    return (
        <div id='containerTitle'>
            <ul>
                <NavLink to={"/"}>
                    <li>Bienvenu</li>
                </NavLink>
                <NavLink to={"/login"}>
                    <li>Login</li>
                </NavLink>

                <NavLink to={"/inscription"}>
                    <li>Inscription</li>
                </NavLink>


            </ul>
            <Helloword></Helloword>
        </div>
    );
};

export default Navigation;