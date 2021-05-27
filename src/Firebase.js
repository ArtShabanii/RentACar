import firebase from 'firebase';
import store from './store';
const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyD5Ie-RJM8pkKOmoAw4QgudMbrPenkHyUw",
    authDomain: "rentacar-project21.firebaseapp.com",
    databaseURL: "https://rentacar-project21-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "rentacar-project21",
    storageBucket: "rentacar-project21.appspot.com",
    messagingSenderId: "519381286016",
    appId: "1:519381286016:web:1763379c80f2cd7cdafa65"
};

firebase.initializeApp(config);

firebase.firestore().settings(settings);

firebase.auth().onAuthStateChanged(user=>{
    store.dispatch("fetchUser", user);
});

firebase.getCurrentUser  = () => {
    return new Promise((resolve,reject)=>{
        const unsubscribe = firebase.auth().onAuthStateChanged(user=>{
            unsubscribe();
            resolve(user);
        }, reject);
    });
}

export default firebase;
