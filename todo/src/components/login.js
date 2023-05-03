import React, {useCallback, useEffect, useState} from 'react';
import Navigation from "./Navigation";
import Form from "./Form";
import {Link} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [probleme, setProbleme] = useState("");
    useEffect(() => {
        if (localStorage.getItem('test') === 'ok') {
            setProbleme('connecte');
            return;
        }
    }, []);


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
        )
        await response.json().then(data => {

            if (!isNaN(data?.id)) {
                setProbleme('connecte')
                localStorage.setItem('test', 'ok');
            }

        })
    });

    return (
        <div>
            {(probleme === "connecte") ? (<Form></Form>) : ''
            }
            {(probleme !== "connecte") ? (
                <>
                    <div id='container'>
                        <Navigation></Navigation>
                        <div id="iconLogin"/>
                        <input id='email' value={email} placeholder={'email'} onChange={e => setEmail(e.target.value)}
                               type={'text'}/>
                        <input id='password' value={password} placeholder={'password'}
                               onChange={e => setPassword(e.target.value)} type={'text'}/>
                        <Link id="mdpOublie" to="mdpOublie" relative='/'>Mot de passe ounblié</Link>
                        <button onClick={fetchConnection} id='btnLogin'>LOGIN</button>
                        <h1>{(probleme !== 'connecte' ? 'incorrect' : 'connecte')}</h1>
                        <Link to='inscription' relative='/'>
                            SIGNUP
                        </Link>
                    </div>
                </>

            ) : ''
            }
        </div>
    );
};

export default Login;