import React from 'react';
import {Accordion, AccordionActions, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import type {SavedSearchQuery} from "../../types/query.types.ts";

interface Props {
    data: SavedSearchQuery;
}

export const SearchAgent: React.FC<Props> = ({data}) => {
    return (
        <Accordion>
            <AccordionSummary
                aria-controls={`${data.id}-content`}
                id={`${data.id}-header`}
            >
                <Typography component="span">{ data.keyword }</Typography>
            </AccordionSummary>
            <AccordionDetails>
                TODO
            </AccordionDetails>
            <AccordionActions>
                TODO
            </AccordionActions>
        </Accordion>
    );
};

