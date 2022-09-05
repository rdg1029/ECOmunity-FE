import { UserInfo } from 'firebase/auth'

class User implements UserInfo {
    public displayName: string | null;
    public phoneNumber: string | null;
    public email: string | null;
    public photoURL: string | null;
    public providerId: string;
    public uid: string;
    
    constructor() {
        this.displayName = null;
        this.phoneNumber = null;
        this.email = null;
        this.photoURL = null;
        this.providerId = "";
        this.uid = "";
    }

    setLogin(userInfo: UserInfo) {
        this.displayName = userInfo.displayName;
        this.phoneNumber = userInfo.phoneNumber;
        this.email = userInfo.email;
        this.photoURL = userInfo.photoURL;
        this.providerId = userInfo.providerId;
        this.uid = userInfo.uid;
    }

    setLogout() {
        this.displayName = null;
        this.phoneNumber = null;
        this.email = null;
        this.photoURL = null;
        this.providerId = "";
        this.uid = "";
    }
}

export default new User();