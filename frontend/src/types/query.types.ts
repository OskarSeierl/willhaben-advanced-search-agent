export interface SavedSearchQuery {
    id: string;
    keyword: string;
    minPrice?: number;
    maxPrice?: number;
    createdAt: number; // timestamp
}

export type NewQueryData = Omit<SavedSearchQuery, 'id' | 'createdAt'>;