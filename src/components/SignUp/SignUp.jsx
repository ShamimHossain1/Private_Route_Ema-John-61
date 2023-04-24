import React, { useContext, useState } from 'react';
import { Button, Card, Checkbox, Label, TextInput, Toast} from 'flowbite-react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../AuthProviders/AuthProviders';


const SignUp = () => {
    const [error, setError]=useState('')
    const {createUser} = useContext(AuthContext);
    const handleSignUp=event=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        if(password!==confirm){
            setError('Password not matched')
            return;
        }
        if(password.length<6){
            setError('Password must be 6 characters long')
            return;
        }
        createUser(email, password)
        .then(result =>{
            const loggedUser= result.user;
            console.log(loggedUser);
            form.reset();
            toast("Registration Completed");
        })
        .catch(error=>{
            console.log(error.message)
           
        })
        setError('')
        // console.log(password)
       
    }
    return (
        <div className='w-1/4 mx-auto mt-14'>
            <ToastContainer />
           
            <h2 className='text-5xl font-bold text-center mb-10'>Please Sign Up</h2>
            <Card>
                <form onSubmit={handleSignUp} className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email2"
                            value="Your Name"
                        />
                    </div>
                    <TextInput
                        name='name'
                        type="text"
                        placeholder=""
                        required={true}
                        shadow={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email2"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        name='email'
                        id="email2"
                        type="email"
                        placeholder="name@mail.com"
                        required={true}
                        shadow={true}
                    />
                    
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password2"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                    name='password'
                        id="password2"
                        type="password"
                        required={true}
                        shadow={true}
                    /><p className='text-red-600 text-sm'>{error}</p>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="repeat-password"
                            value="Repeat password"
                        />
                    </div>
                    <TextInput
                        name='confirm'
                        id="repeat-password"
                        type="password"
                        required={true}
                        shadow={true}
                    /><p className='text-red-600 text-sm'>{error}</p>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="agree" />
                    <Label htmlFor="agree">
                        I agree with the
                        <a
                            href="/forms"
                            className="text-blue-600 hover:underline dark:text-blue-500"
                        >
                            terms and conditions
                        </a>
                    </Label>
                </div>
                <Button type="submit">
                    Register new account
                </Button>
            </form>
                <p className='text-center'>Already have account? <Link className='text-blue-600' to='/login'>Login Now!</Link></p>
            </Card>
            
        </div>
    );
};

export default SignUp;