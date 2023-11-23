
import { Grid } from '@mui/material';

interface AlertLoginProps {
    children: React.ReactNode
}


export default function AlertLoginStyled(props: AlertLoginProps) {
    return (
        <Grid container>
            {props.children}
        </Grid>
    );
}