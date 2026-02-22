/**
 * Interface for a Willhaben category
 */
export interface Category {
  url: string;
  id: number;
  name: string;
}

export interface CategoryOption {
  label: string;
  id: number;
}

/**
 * Context for managing Willhaben categories
 */
export interface CategoriesContextType {
    categories: Category[];
    categoriesObject: Record<string, Category>;
    loading: boolean;
    error: Error | null;
}