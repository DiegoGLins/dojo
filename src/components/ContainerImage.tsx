
import { Grid } from '@mui/material';
import React from 'react';


interface ContainerImageProps {
    image: string
}

const ContainerImage: React.FC<ContainerImageProps> = ({ image }) => {
    return (
        <Grid item xs={8} sx={{ background: `url(${image}) center/cover no-repeat`, width: '100vw', maxHeight: '100vh' }}></Grid>
    );
};

export default ContainerImage;
