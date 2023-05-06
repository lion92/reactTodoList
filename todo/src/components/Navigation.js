import React from 'react';
import {NavLink} from "react-router-dom";
import Helloword from "./Helloword";

const Navigation = () => {
    return (
        <div id='containerTitle'>
            <ul>
                <NavLink to={"/"}>
                    <li>Bienvenue</li>
                </NavLink>
                <NavLink to={"/form"}>
                    <li>Gestion des taches</li>
                </NavLink>


            </ul>
            <Helloword></Helloword>
        </div>
    );
};

export default Navigation;