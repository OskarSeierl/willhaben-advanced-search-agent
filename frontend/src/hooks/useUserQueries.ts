import { useState, useEffect } from 'react';
import {
    collection,
    query,
    onSnapshot,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    serverTimestamp,
    orderBy
} from 'firebase/firestore';
import { db } from '../config/firebase';
import type {NewQueryData, SavedSearchQuery} from "../types/query.types.ts";

const getUserQueriesRef = (userId: string) => collection(db, 'users', userId, 'queries');
const getUserQueryRef = (userId: string, queryId: string) => doc(db, 'users', userId, 'queries', queryId);

export const useUserQueries = (userId: string | undefined | null) => {
    const [savedQueries, setSavedQueries] = useState<SavedSearchQuery[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!userId) throw new Error("Must be logged in to fetch queries.");

        // Order by createdAt to show most recent queries first
        const q = query(getUserQueriesRef(userId), orderBy('createdAt', 'desc'));

        const unsubscribe = onSnapshot(q,
            (snapshot) => {
                const results = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })) as SavedSearchQuery[];

                setSavedQueries(results);
                setLoading(false);
            },
            (error) => {
                console.error("Error fetching saved queries:", error);
                setLoading(false);
            }
        );

        return () => unsubscribe();
    }, [userId]);

    const addQuery = async (queryData: NewQueryData) => {
        if (!userId) throw new Error("Must be logged in to save a search.");

        await addDoc(getUserQueriesRef(userId), {
            ...queryData,
            createdAt: serverTimestamp() // Always use server time!
        });
    };

    const updateQuery = async (queryId: string, updatedData: Partial<NewQueryData>) => {
        if (!userId) throw new Error("Must be logged in to update a search.");
        await updateDoc(getUserQueryRef(userId, queryId), updatedData);
    };

    const deleteQuery = async (queryId: string) => {
        if (!userId) throw new Error("Must be logged in to delete a search.");
        await deleteDoc(getUserQueryRef(userId, queryId));
    };

    return {
        savedQueries,
        queriesLoading: loading,
        addQuery,
        updateQuery,
        deleteQuery
    };
};