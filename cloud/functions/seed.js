import Profile from '../schemas/profile';

Parse.Cloud.define("seed", function (req, res) {
    const profile = new Profile();
    profile.role = 'doctor';
    profile.save()
        .then(
            (profile) => "object saved with id:" + profile.objectId,
            (error) => "error saving" + error
        );
});