import React, {useState} from 'react';

const Connection = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div id='container'>
            <div id="iconLogin"></div>
            <input id='email' value={email} placeholder={'email'} onChange={e => setEmail(e.target.value)} type={'text'} />
            <input id='password' value={password} placeholder={'password'} onChange={e => setPassword(e.target.value)} type={'text'} />
            <a id="mdpOublie" href="">Mot de passe ounblié</a>
        </div>
    );
};

export default Connection;