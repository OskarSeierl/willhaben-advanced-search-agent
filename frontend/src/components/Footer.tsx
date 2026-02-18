import React from 'react';
import {Box, Link} from "@mui/material";

export const Footer: React.FC = () => {
    return (
        <Box component="footer">
            <p>
                built by <Link href="https://oskarseierl.at">Oskar Seierl</Link>
            </p>
        </Box>
    );
};

