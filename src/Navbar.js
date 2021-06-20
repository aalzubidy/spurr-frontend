import React, { useContext } from 'react';
import { withRouter, useHistory } from "react-router-dom";
import { AuthContext } from './contexts/AuthContext';

const Navbar = () => {
    // Settings
    const history = useHistory();

    // Authorization
    const { token } = useContext(AuthContext);
    const { user } = useContext(AuthContext);

    const handleOnClick = (evt) => {
        evt.preventDefault();
        history.push(`/${evt.target.name}`);
    }

    return (
        <div>
            <h1>{token && user ? `Hi ${user.username}!` : ''}</h1>
            <button onClick={handleOnClick} name="">Home</button>
            {!token && !user ? <button onClick={handleOnClick} name="login">Login</button> : <button onClick={handleOnClick} name="accountSettings">Account</button>}
            <button onClick={handleOnClick} name="newPost">New Post</button>
        </div>
    );
}

export default withRouter(Navbar);
