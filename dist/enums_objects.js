"use strict";
// enum
var Roles;
(function (Roles) {
    Roles["User"] = "User";
    Roles["Admin"] = "Admin";
    Roles["SuperAdmin"] = "SuperAdmin";
})(Roles || (Roles = {}));
console.log(Roles.Admin);
// objects
const roles = {
    User: 0,
    Admin: 1,
    SuperAdmin: 2
};
console.log(roles.Admin);
