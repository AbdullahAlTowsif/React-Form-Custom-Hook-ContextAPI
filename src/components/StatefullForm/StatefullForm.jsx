import { useState } from "react";

const StatefullForm = () => {
    const [name, setName] = useState('rojoni klanto');
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if(password.length < 7){
            setError('password must be 7 characters long');
        }
        else{
            setError('');
        }
        console.log(email, password, name);
    }

    const hanleEmailChange = e => {
        // console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} value={name} type="text" name="name" />
                <br />
                <input onChange={hanleEmailChange} type="email" name="email" id="" />
                <br />
                <input onChange={handlePasswordChange} required type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefullForm;