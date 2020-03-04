import React from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios'; 
import styled from 'styled-components';

const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const Flexdiv = styled.div`
display: flex;
flex-direction: column;
`;


const Button = styled.button`
width: 10%;
margin: 2%;
`;


const Login = (props) => {

    const useform = useForm(props);
    console.log('useform objects = ', useform);
    const onSubmit = (values) => {
        console.log('onSubmit values', values);
        axios
        .post('https://comake2.herokuapp.com/api/auth/login', values)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        
    }

    // console.log('user', useform.watch('username'), 'pw', useform.watch('password'));

    

    return (

        <Form onSubmit = {useform.handleSubmit(onSubmit)}>

            <p>Login</p>

            <Flexdiv>
                <label htmlFor = 'username'>Username</label>
                <input htmlFor = 'username' name = 'username' ref = {useform.register({ required: true })} />
                {useform.errors.username && <p className='loginError'>Username is required!</p>}
            </Flexdiv>

            <Flexdiv>
                <label htmlFor = 'password'>Password</label>
                <input htmlFor = 'password' name = 'password' ref = {useform.register({ required: true })} type = 'password'/>
                {useform.errors.password && <p className='loginError'>Password is required!</p>}
            </Flexdiv>

            <Button type = 'submit'>Login</Button>

        </Form>

    )

}

export default Login;