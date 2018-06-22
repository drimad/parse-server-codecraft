import Profile from '../schemas/profile';

Parse.Cloud.define('seed', function (req, res) {
    const profile = new Profile();
    profile.role = 'doctor';
    profile.save()
           .then(function () {
               res.success('object saved');
           }, function (error) {
               res.error('error saving');
           });
});