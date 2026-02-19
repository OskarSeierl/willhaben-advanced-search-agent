import {BottomNavigation, BottomNavigationAction, Box} from "@mui/material";
import React, {useMemo} from 'react';
import { pages } from "../../config/pages.ts";
import {useNavigate} from "react-router-dom";

export const BottomNavbar: React.FC = () => {

    const navigate = useNavigate();

    const activeIndexFromPath = useMemo(() => {
        return 0; // TODO: Implement logic to determine active index based on current path
    }, []);

    return (
        <Box sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
        }}>
            <BottomNavigation
                showLabels
                value={activeIndexFromPath}
                onChange={(_event, newValue) => {
                    navigate(pages[newValue].route);
                }}
            >
                {pages.map((page) => (
                    <BottomNavigationAction key={page.name} label={page.name} icon={<page.icon/>}/>
                ))}
            </BottomNavigation>
        </Box>
    );
};

