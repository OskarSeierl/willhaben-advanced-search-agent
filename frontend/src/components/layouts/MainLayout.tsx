import {
    Box,
    Container,
    Paper,
    useMediaQuery,
    useTheme
} from "@mui/material";
import React from 'react';
import {Outlet} from "react-router-dom";
import {Navbar} from "../navigation/Navbar.tsx";
import {BottomNavbar} from "../navigation/BottomNavbar.tsx";
import {Footer} from "../Footer.tsx";

export const MainLayout: React.FC = () => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    const [activeIndex, setActiveIndex] = React.useState(0);

    return (
        <Container sx={{p: 0, mt: [0, 3]}}>
            <Navbar showButtons={isDesktop}/>

            <Paper sx={{p: 2, mt: [1, 3]}}>
                <Outlet/>
            </Paper>

            <Box sx={{mt: 3}}>
                <Footer/>
            </Box>

            {!isDesktop && (
                <BottomNavbar activeButtonIndex={activeIndex} onClick={setActiveIndex}/>
            )}
        </Container>

    );
};

