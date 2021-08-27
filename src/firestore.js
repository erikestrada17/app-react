import store from './firebaseconfig'

const db = store //store = firebase.firestore()

export async function insert(local) { //TODO: continuar insert
    try {
        const response = await db.collection("locales").add(local);
        return response;
    } catch (error) {
        throw new Error(error);
    }
}