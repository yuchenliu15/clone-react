import app from 'firebase/app';
import 'firebase/database';

const devConfig = {
    apiKey: process.env.REACT_APP_DEV_API_KEY,
    authDomain: process.env.REACT_APP_DEV_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DEV_DATABASE_URL,
    projectId: process.env.REACT_APP_DEV_PROJECT_ID,
    storageBucket: process.env.REACT_APP_DEV_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_DEV_MESSAGING_SENDER_ID,
};

const prodConfig = {
    apiKey: process.env.REACT_APP_PROD_API_KEY,
    authDomain: process.env.REACT_APP_PROD_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_PROD_DATABASE_URL,
    projectId: process.env.REACT_APP_PROD_PROJECT_ID,
    storageBucket: process.env.REACT_APP_PROD_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_PROD_MESSAGING_SENDER_ID,
};

const config = process.env.NODE_ENV === 'development' ? devConfig : prodConfig;
class Firebase {
    constructor() {
        app.initializeApp(config);
        this.db = app.database();
    }

    addSubscriber(database, email) {
        const uniqueID = new Date().getMilliseconds();
        return database.ref('subscriptions/' + uniqueID).set({
            email
        })
            .then(() => true)
            .catch(() => false);
    }

}

export default Firebase;