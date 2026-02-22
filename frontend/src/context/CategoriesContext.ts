import {createContext} from "react";
import type {CategoriesContextType} from "../types/category.types";

export const CategoriesContext = createContext<CategoriesContextType | undefined>(undefined);

