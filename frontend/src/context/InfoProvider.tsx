import React, { useState, useCallback } from 'react';
import { Alert, Snackbar } from '@mui/material';
import {InfoContext} from './InfoContext.ts';
import type {InfoContextType} from "../types/info.types.ts";

type AlertSeverity = 'success' | 'info' | 'warning' | 'error';

interface SnackbarState {
    open: boolean;
    message: string;
    severity: AlertSeverity;
}

const DEFAULT_DURATION = 10000;

export const InfoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [snackbar, setSnackbar] = useState<SnackbarState>({
        open: false,
        message: '',
        severity: 'error',
    });

    const showSnackbar = useCallback((message: string, severity: AlertSeverity, duration: number = DEFAULT_DURATION) => {
        setSnackbar({
            open: true,
            message,
            severity,
        });

        if (duration > 0) {
            setTimeout(() => {
                setSnackbar((prev) => ({ ...prev, open: false }));
            }, duration);
        }
    }, []);

    const handleClose = () => {
        setSnackbar((prev) => ({ ...prev, open: false }));
    };

    const value: InfoContextType = {
        showError: (message, duration) => showSnackbar(message, 'error', duration),
        showSuccess: (message, duration) => showSnackbar(message, 'success', duration),
        showInfo: (message, duration) => showSnackbar(message, 'info', duration),
        showWarning: (message, duration) => showSnackbar(message, 'warning', duration),
    };

    return (
        <InfoContext.Provider value={value}>
            { children }
            <Snackbar
                open={snackbar.open}
                autoHideDuration={DEFAULT_DURATION}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert
                    onClose={handleClose}
                    severity={snackbar.severity}
                    sx={{ width: '100%' }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </InfoContext.Provider>
    );
};
