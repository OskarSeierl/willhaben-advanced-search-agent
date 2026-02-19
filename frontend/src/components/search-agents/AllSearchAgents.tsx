import React from 'react';
import {Box, Skeleton, Stack} from "@mui/material";
import {useUserQueries} from "../../hooks/useUserQueries.ts";
import {useAuth} from "../../hooks/useAuth.ts";
import {SearchAgent} from "./SearchAgent.tsx";

export const AllSearchAgents: React.FC = () => {
    const {user} = useAuth();
    const {savedQueries, queriesLoading} = useUserQueries(user?.uid)

    if(queriesLoading) {
        return (
            <Stack spacing={0.3}>
                <Skeleton variant="rectangular" height={60} />
                <Skeleton variant="rectangular" height={60} />
                <Skeleton variant="rectangular" height={60} />
            </Stack>
        );
    }

    return (
        <Box>
            {
                savedQueries.map((query, index) => (
                    <SearchAgent key={index} data={query} />
                ))
            }
        </Box>
    );
};

