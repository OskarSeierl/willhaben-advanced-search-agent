import {useContext} from "react";
import {CategoriesContext} from "../context/CategoriesContext.ts";
import type {CategoriesContextType} from "../types/category.types.ts";

export function useCategories(): CategoriesContextType {
    const context = useContext(CategoriesContext);
    if (!context) {
        throw new Error("useCategories must be used within a CategoriesProvider");
    }
    return context;
}

