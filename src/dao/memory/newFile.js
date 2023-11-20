const { createHash } = require("../../utils/utils");

module.exports = class UserMemory {
  constructor() {
    this.data = [];
  }
  postLogin = (email) => {
    const user = this.data.find(
      { email },
      {
        first_name: 1,
        last_name: 1,
        age: 1,
        password: 1,
        email: 1,
        role: 1,
      }
    );
    return user;
    console.log(user);
  };

  postRegister = (first_name, last_name, email, age, password) => {
    const hashedPassword = createHash(password);
    let result = this.data.push({
      first_name,
      last_name,
      email,
      age,
      password: hashedPassword,
    });
    return result;
  };
  postRestore = async (email, password) => {};
};
