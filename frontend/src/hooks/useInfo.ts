import { useContext } from 'react';
import type {InfoContextType} from "../types/info.types.ts";
import {InfoContext} from "../context/InfoContext.ts";

export const useInfo = (): InfoContextType => {
    const context = useContext(InfoContext);
    if (!context) {
        throw new Error('useInfo must be used within an InfoProvider');
    }
    return context;
};

