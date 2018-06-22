import { ProfileSchema } from './index';

class Profile extends Parse.Object {
    constructor() {
        super(ProfileSchema);
        this.role = '';
    }
}

Parse.Object.registerSubclass(ProfileSchema, Profile);

export default Profile;