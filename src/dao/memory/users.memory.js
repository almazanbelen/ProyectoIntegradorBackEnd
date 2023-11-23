// const { createHash } = require("../../utils/utils");

// module.exports = class UserMemory {
//   constructor() {
//     this.data = [];
//   }
//   postLogin = (email) => {
//     const user = this.data.map((p)=>{
//       let userFound = p.email === email
//       return userFound
//     })    
//     return user
//   };
//   postRegister = (first_name, last_name, email, age, password) => {
//     if (email === config.adminNAME) {
//       const hashedPassword = createHash(password);
//       let result = this.data.push({
//         first_name,
//         last_name,
//         email,
//         age,
//         password: hashedPassword,
//         role: "admin"
//       });
//       return result
//     }
//     if (email === "almazanbelen01@gmail.com") {
//       const hashedPassword = createHash(password);
//       let result = this.data.push({
//         first_name,
//         last_name,
//         email,
//         age,
//         password: hashedPassword,
//         role: "premium"
//       });
//     }
    
//     const hashedPassword = createHash(password);
//     let result = this.data.push({
//       first_name,
//       last_name,
//       email,
//       age,
//       password: hashedPassword
//     });
//     return result;
//   };
  
//   findUser = async (email) => {
//     const user = this.data.map((p)=>{
//       let userFound = p.email === email
//       return userFound
//     })
//     return user
//   }
//   postRestore = async (email, password) => {
//     const hashedPassword = createHash(password);
//     const user = this.data.map((p)=>{
//       let userFound = p.email === email
//       return userFound
//     })
//     const newPassword = user.password = { password: hashedPassword }
//     return newPassword
//   };
// };
