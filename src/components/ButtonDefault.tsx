import { Grid } from '@mui/material';
import React from 'react';

interface ButtonDefaultProps {
    label: string
    cor: string
    children?: React.ReactNode
}

const ButtonDefault: React.FC<ButtonDefaultProps> = ({ label, cor, children }) => {
    return (
        <Grid item style={{ background: cor, marginTop: '20px' }}>{label}
            {children}
        </Grid>
    );
};

export default ButtonDefault;
