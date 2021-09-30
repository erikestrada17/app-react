// import { store } from './firebaseconfig'

// const db = store
import {store} from "./firebaseconfig";

const db = store.collection("/locales");

class CRUD {
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

export default new CRUD();