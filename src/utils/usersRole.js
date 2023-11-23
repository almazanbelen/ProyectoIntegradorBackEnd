const config = require("../config/config");


function userRole(email){
    if (email === config.adminNAME) {
       const role = {
        role: "admin"
       }
       return role
    }
    if (email === config.adminEMAIL) {
       const role = {
        role: "premium"
       }
       return role
    }else {
        const role = {
            role: "user"
        }
        return role
    }
}
// module.exports = userRole
// function userRole(email, role){
// if (email != config.adminNAME && role != "admin") {
//     return ({ error: "No autorizado para ingresar a la seccion solicitada",
//     });
//   }
//   if (email != "almazanbelen01@gmail.com" && role != "premium") {
//     return ({ error: "No autorizado para ingresar a la seccion solicitada" });
//   }
// }
module.exports = userRole