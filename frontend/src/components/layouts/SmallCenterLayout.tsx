import {
    Box,
    Container,
    Paper, Stack
} from "@mui/material";
import React from 'react';
import {Outlet} from "react-router-dom";
import Logo from '../../assets/logo.png';
import {Footer} from "../Footer.tsx";

export const SmallCenterLayout: React.FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '80vh',
            }}
        >
            <Container maxWidth="sm">
                <Stack spacing={2}>
                    <Box sx={{maxWidth: 200}}>
                        <img style={{width: "100%"}} src={Logo} alt="MussHaben Logo" />
                    </Box>
                    {/* Paper component added just to show the boundaries visually */}
                    <Paper elevation={3} sx={{p: 4}}>
                        <Outlet/>
                    </Paper>
                    <Footer/>
                </Stack>
            </Container>
        </Box>
    );
};

