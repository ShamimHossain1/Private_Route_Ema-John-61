import { Button, Card, Checkbox, Label, Spinner, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProviders/AuthProviders';

const Login = () => {
    const { signIn} = useContext(AuthContext);
    const [user, setUser] =useState('')
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user
                // setUser(loggedUser);                          
                form.reset();
                navigate(from, {replace:true});
            })
            .catch(error => {
                console.log(error.message)
            })

    }
    return (
        <div className="max-w-sm mx-auto mt-20">
            <h2 className='text-5xl font-bold text-center mb-10'>Please Login</h2>
            <Card>
                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email1"
                                value="Your email"
                            />
                        </div>
                        <TextInput
                            name='email'
                            id="email1"
                            type="email"
                            placeholder="name@flowbite.com"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="password1"
                                value="Your password"
                            />
                        </div>
                        <TextInput
                            name='password'
                            id="password1"
                            type="password"
                            required={true}
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">
                            Remember me
                        </Label>
                        <Link className='ml-auto text-blue-600' to="/signUp">Forget Password?</Link>
                    </div>
                    <Button type="submit">
                        Submit
                    </Button>
                </form>
                <p className='text-center'>New to Ema Jhon? <Link className='text-blue-600' to='/signUp'>Register Now!</Link></p>
                {/* {
                    user && <Navigate to='/'/>
                } */}
            </Card>
        </div>

    );
};

export default Login;