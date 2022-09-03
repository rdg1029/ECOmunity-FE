import { UserCredential } from 'firebase/auth'

export interface UserData {
    name: string | null;
    email: string | null;
    photoURL: string | null;
    uid: string | null;
}
class User implements UserData {
    public isSigned: boolean;
    public name: string | null;
    public email: string | null;
    public photoURL: string | null;
    public uid: string | null;
    
    constructor() {
        this.isSigned = false;
        this.name = null;
        this.email = null;
        this.photoURL = null;
        this.uid = null;
    }

    setLogin(credential: UserCredential) {
        const user = credential.user;
        this.name = user.displayName;
        this.email = user.email;
        this.photoURL = user.photoURL;
        this.uid = user.uid;

        this.isSigned = true;
    }

    setLogout() {
        this.name = null;
        this.email = null;
        this.photoURL = null;
        this.uid = null

        this.isSigned = false;
    }
}

export default new User();