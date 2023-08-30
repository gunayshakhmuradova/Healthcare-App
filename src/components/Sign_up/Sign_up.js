import React, { useState } from 'react';
import './Sign_up.css';
import { useNavigate } from 'react-router-dom'; // Link kullanımını kaldırdık
import { API_URL } from '../../config';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState('');
    const navigate = useNavigate();

    const register = async (e) => {
        e.preventDefault();
        
        // API Call
        const response = await fetch(`${API_URL}/api/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                phone: phone,
            }),
        });

        const json = await response.json();
        if (json.authtoken) {
            sessionStorage.setItem('auth-token', json.authtoken);
            sessionStorage.setItem('name', name);
            // phone and email
            sessionStorage.setItem('phone', phone);
            sessionStorage.setItem('email', email);
            
            // Redirect to home page
            navigate('/');
            window.location.reload();
        } else {
            if (json.errors) {
                const errorMessages = json.errors.map((error) => error.msg);
                setShowerr(errorMessages.join(', '));
            } else {
                setShowerr(json.error);
            }
        }
    };

    return (
        <div className="container" style={{ marginTop: '5%' }}>
            <div className="signup-grid">
                <div className="signup-form">
                    <form method="POST" onSubmit={register}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                name="email"
                                id="email"
                                className="form-control"
                                placeholder="Enter your email"
                                aria-describedby="helpId"
                            />
                            {showerr && (
                                <div className="err" style={{ color: 'red' }}>
                                    {showerr}
                                </div>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                name="name"
                                id="name"
                                required
                                className="form-control"
                                placeholder="Enter your name"
                                aria-describedby="helpId"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                type="tel"
                                name="phone"
                                id="phone"
                                required
                                className="form-control"
                                placeholder="Enter your phone number"
                                aria-describedby="helpId"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                name="password"
                                id="password"
                                required
                                className="form-control"
                                placeholder="Enter your password"
                                aria-describedby="helpId"
                            />
                        </div>
                        <div className="btn-group">
                            <button
                                type="submit"
                                className="btn btn-primary mb-2 mr-1 waves-effect waves-light"
                            >
                                Submit
                            </button>
                            <button
                                type="reset"
                                className="btn btn-danger mb-2 waves-effect waves-light"
                            >
                                Reset
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
