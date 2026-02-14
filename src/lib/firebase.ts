// No top-level firebase imports to ensure zero bundle overhead until called

let appInstance: any = null;

const firebaseConfig = {
    apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
    authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.PUBLIC_FIREBASE_APP_ID,
    measurementId: import.meta.env.PUBLIC_FIREBASE_MEASUREMENT_ID
};

async function getApp() {
    if (!appInstance) {
        const { initializeApp, getApps } = await import('firebase/app');
        appInstance = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
    }
    return appInstance;
}

// Export functional getters for services - now all async
export const getFirestoreDb = async () => {
    const app = await getApp();
    const { getFirestore } = await import('firebase/firestore');
    return getFirestore(app);
};

export const getFirebaseAuth = async () => {
    const app = await getApp();
    const { getAuth } = await import('firebase/auth');
    return getAuth(app);
};

export const getFirebaseAnalytics = async () => {
    if (typeof window !== 'undefined') {
        const app = await getApp();
        const { getAnalytics } = await import('firebase/analytics');
        return getAnalytics(app);
    }
    return null;
};

export const getFirebasePerformance = async () => {
    if (typeof window !== 'undefined') {
        const app = await getApp();
        const { getPerformance } = await import('firebase/performance');
        return getPerformance(app);
    }
    return null;
};

