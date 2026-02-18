import React from 'react';
import type {InfoContextType} from "../types/info.types.ts";

export const InfoContext = React.createContext<InfoContextType | undefined>(undefined);

