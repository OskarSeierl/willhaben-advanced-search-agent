import React from 'react';
import {Box, Stack, Typography} from "@mui/material";
import {useAuth} from "../../hooks/useAuth.ts";
import {AllSearchAgents} from "../../components/search-agents/AllSearchAgents.tsx";

const Home: React.FC = () => {
    const {user} = useAuth();

    return (
        <Stack spacing={2}>
            <Box>
                <Typography variant="h4" gutterBottom>Hallo {user?.displayName || user?.email || ""}</Typography>
                <AllSearchAgents/>
            </Box>
        </Stack>
    );
};

export default Home;

