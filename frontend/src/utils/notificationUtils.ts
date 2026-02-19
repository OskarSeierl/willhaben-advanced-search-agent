import { getToken } from "firebase/messaging";
import {messaging} from "../config/firebase.ts";
const { VITE_FIREBASE_VAPID_KEY } = import.meta.env;

export const requestNotificationPermission = async (): Promise<NotificationPermission> => {
    if (!("Notification" in window)) {
        console.warn("This browser does not support notifications.");
        return "denied";
    }

    try {
        return await Notification.requestPermission();
    } catch (error) {
        console.error("Error requesting notification permission:", error);
        return "denied";
    }
};

export const getNotificationToken = async (): Promise<string | null> => {
    const permission = await requestNotificationPermission();

    if(permission === "granted") {
        return await getToken(messaging, {
            vapidKey: VITE_FIREBASE_VAPID_KEY,
        });
    }

    return null;
};

export const requiresFirestoreSync = (userId: string, token: string): boolean => {
    if (!userId || !token) return false;

    const storageKey = `fcm_token_${userId}`;
    const savedToken = localStorage.getItem(storageKey);

    if (token !== savedToken) {
        // Token is new or changed. Update local cache and tell caller to sync.
        localStorage.setItem(storageKey, token);
        return true;
    }

    // Token matches what we already have. No sync needed.
    return false;
};