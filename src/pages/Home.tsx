/* eslint-disable react-hooks/exhaustive-deps */
import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';


const Home: React.FC = () => {
    const navigate = useNavigate()
    const userLoggedRedux = useAppSelector(state => state.userlogin.email)
    const userStorage = localStorage.getItem("userLogged")

    useEffect(() => {
        if (userStorage) {
            return
        }
        if (!userLoggedRedux) {
            navigate("/")
            return
        }
    }, [userLoggedRedux, userStorage])

    return (
        <Grid container justifyContent={'center'} alignItems={'center'}>
            <h1>Bem vindo</h1>
        </Grid>
    );
};

export default Home;
