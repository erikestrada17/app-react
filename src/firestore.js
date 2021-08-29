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

export class CRUD {
    getAll() {
        return db;
    }

    create(name) {
        return db.add(name);
    }

    update(id, value) {
        return db.doc(id).update(value);
    }

    delete(id) {
        return db.doc(id).delete();
    }
}