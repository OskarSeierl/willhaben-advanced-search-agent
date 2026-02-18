import React from 'react';
import {Box, Stack, Typography} from "@mui/material";
import {useAuth} from "../../hooks/useAuth.ts";

const Home: React.FC = () => {
  const {user} = useAuth();

  return (
    <Stack spacing={2}>
      <Box>
        <Typography variant="h4" >Hallo {user?.displayName || user?.email || ""}</Typography>
      </Box>
    </Stack>
  );
};

export default Home;

