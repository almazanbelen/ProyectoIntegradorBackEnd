const { createHash } = require("../../utils/utils");

module.exports = class UserMemory {
  constructor() {
    this.data = [];
  }
  postLogin = (email) => {
    const user = this.data.map((p)=>{
      let userFound = p.email === email
      return userFound
    })    
    return user
  };
  postRegister = (first_name, last_name, email, age, password) => {
    const hashedPassword = createHash(password);
    let result = this.data.push({
      first_name,
      last_name,
      email,
      age,
      password: hashedPassword
    });
    return result;
  };
  postRestore = async (email, password) => {
    const hashedPassword = createHash(password);
    const user = this.data.map((p)=>{
      let userFound = p.email === email
      return userFound
    })
    const newPassword = user.password = { password: hashedPassword }
    return newPassword
  };
};
