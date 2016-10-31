"use strict";
var User = (function () {
    function User(id, name, email, password) {
    }
    ;
    User.isNull = function (user) {
        return user.email === null &&
            user.password === null &&
            user.name === null &&
            user.id === null;
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map