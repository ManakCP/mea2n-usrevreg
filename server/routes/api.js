module.exports = function(app){
    let auth = require('../Controller/auth');

    app.route('/user')
        .get(auth.get_user)
        .post(auth.add_user);
};