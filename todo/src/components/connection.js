import React, {useCallback, useState} from 'react';
import Navigation from "./Navigation";

const Connection = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let fetchConnection = useCallback(async (e) => {
        e.preventDefault();
        const response = await fetch(
            "http://localhost:3000/connection/login",
            {
                method: "POST",
                body: JSON.stringify({

                    "password": password,
                    "email": email
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    });

    return (
        <div>

            <div id='container'>
                <Navigation></Navigation>
                <div id="iconLogin"/>
                <input id='email' value={email} placeholder={'email'} onChange={e => setEmail(e.target.value)}
                       type={'text'}/>
                <input id='password' value={password} placeholder={'password'}
                       onChange={e => setPassword(e.target.value)} type={'text'}/>
                <a id="mdpOublie" href="">Mot de passe ounblié</a>
                <button onClick={fetchConnection} id='btnLogin'>LOGIN</button>
                <a href='/inscription'>
                    <button id='btnSignup'>SIGNUP</button>
                </a>
            </div>
        </div>
    );
};

export default Connection;