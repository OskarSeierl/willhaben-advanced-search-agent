import React, {useEffect} from 'react';
import {Outlet} from 'react-router-dom';
import {getNotificationToken, requiresFirestoreSync} from "../../utils/notificationUtils.ts";
import {useAuth} from "../../hooks/useAuth.ts";
import {doc, setDoc } from "firebase/firestore";
import {db} from "../../config/firebase.ts";

export const NotificationRoute: React.FC = () => {
    const {user} = useAuth();

    useEffect(() => {
        const requestNotifications = async () => {
            try {
                const token = await getNotificationToken();
                if (token) {
                    console.log("Notification token obtained:", token);
                    if (user && requiresFirestoreSync(user.uid, token)) {
                        console.log("Saving notification token for user:", user.uid);
                        await setDoc(doc(db, 'users', user.uid), {fcmToken: token}, {merge: true});
                    }
                }

            } catch (error) {
                console.error("Error requesting notification token:", error);
            }
        };

        requestNotifications();
    }, [user]);

    return <Outlet/>;
};

