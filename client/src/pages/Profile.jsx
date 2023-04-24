import { useEffect, useState } from "react";
import axios from "axios";
import styles from '../components/Card/Card.module.scss'
import AuthService from "../services/AuthService";
import $api from "../http";

function Profile() {
    // console.log(userData);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    // $api.get('/user/get-all-users').then(res => console.log(res.data));
    $api.get('/order/get-user-orders').then(res => console.log(res.data));

    const registration = async (name, email, password) => {
        try {
            const response = await AuthService.registration(name, email, password);
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    const login = async (email, password) => {
        try {
            const response = await AuthService.login(email, password);
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    const logout = async () => {
        try {
            const response = await AuthService.logout();
            console.log(response);
            localStorage.removeItem('token');
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    return (
        // <div className={styles.card}>
        //     <img width={133} height={112} src='img/logo.png' />
        //     <p>{userData.name}</p>
        //     <div className='d-flex justify-between align-center'>
        //         <div className='d-flex flex-column'>
        //             <span>{userData.email}</span>
        //             <b>{userData.role}</b>
        //         </div>
        //         <img className={styles.plus} src='img/btn-unchecked.svg' alt='Plus' />
        //     </div>
        // </div>
        <div>
            <input type="text" onChange={e => setName(e.target.value)} value={name} placeholder="name"></input>
            <input type="text" onChange={e => setEmail(e.target.value)} value={email} placeholder="email"></input>
            <input type="password" onChange={e => setPass(e.target.value)} value={pass} placeholder="password"></input>
            <button onClick={() => login(email, pass)}>Login</button>
            <button onClick={() => logout()}>Logout</button>
            <button onClick={() => registration(name, email, pass)}>Register</button>
        </div>
    );
}

export default Profile;