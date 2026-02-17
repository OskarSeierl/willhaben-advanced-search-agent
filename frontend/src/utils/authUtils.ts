import { signOut, updateProfile, updateEmail, updatePassword } from 'firebase/auth';
import { auth } from '../config/firebase';

/**
 * Logout the current user
 */
export const logout = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Error logging out:', error);
    throw error;
  }
};

/**
 * Update user profile information
 */
export const updateUserProfile = async (
  displayName?: string,
  photoURL?: string
): Promise<void> => {
  const user = auth.currentUser;
  if (!user) throw new Error('No user logged in');

  try {
    await updateProfile(user, {
      displayName: displayName || user.displayName || undefined,
      photoURL: photoURL || user.photoURL || undefined,
    });
  } catch (error) {
    console.error('Error updating profile:', error);
    throw error;
  }
};

/**
 * Update user email
 */
export const updateUserEmail = async (newEmail: string): Promise<void> => {
  const user = auth.currentUser;
  if (!user) throw new Error('No user logged in');

  try {
    await updateEmail(user, newEmail);
  } catch (error) {
    console.error('Error updating email:', error);
    throw error;
  }
};

/**
 * Update user password
 */
export const updateUserPassword = async (newPassword: string): Promise<void> => {
  const user = auth.currentUser;
  if (!user) throw new Error('No user logged in');

  try {
    await updatePassword(user, newPassword);
  } catch (error) {
    console.error('Error updating password:', error);
    throw error;
  }
};

/**
 * Get current user's ID token
 */
export const getUserToken = async (): Promise<string> => {
  const user = auth.currentUser;
  if (!user) throw new Error('No user logged in');

  try {
    return await user.getIdToken();
  } catch (error) {
    console.error('Error getting user token:', error);
    throw error;
  }
};

