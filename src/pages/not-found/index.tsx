import { Card, CardActionArea, CardContent, CardHeader, Stack } from '@mui/material';
import React from 'react';
import './index.scss';
import { Home } from '@mui/icons-material';

const NotFoundPage: React.FC = () => {

    return (<Stack className='movie page' justifyContent={'center'} alignItems={'center'}>
        <Card>
            <CardHeader 
                title={'Movie not found'}
            />
            <CardContent>
                The Id from specified title is not available at this moment
            </CardContent>
            <CardActionArea>
               <a href='/' style={{alignItems: 'center', display: 'flex', justifyContent: 'center'}}><Home /> Go Home</a>
            </CardActionArea>
        </Card>
    </Stack>)
}

export default NotFoundPage;