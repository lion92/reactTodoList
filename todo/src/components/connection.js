import React, {useState} from 'react';
import Navigation from "./Navigation";

const Connection = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
                <button id='btnLogin'>LOGIN</button>
                <button id='btnSignup'>SIGNUP</button>
            </div>
        </div>
    );
};

export default Connection;