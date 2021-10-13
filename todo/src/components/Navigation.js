import React from 'react';
import {NavLink} from "react-router-dom";
import Helloword from "./Helloword";

const Navigation = () => {
    return (
        <div>
            <ul>
                <NavLink to={"/login"}>
                    <li>Login</li>
                </NavLink>
                <NavLink to={"/"}>
                    <li>Bienvenue</li>
                </NavLink>

                <NavLink to={"/form"}>
                    <li>ToDoList</li>
                </NavLink>
            </ul>
            <Helloword></Helloword>
        </div>
    );
};

export default Navigation;