const UsersDTO = require("../../dao/dtos/users.dto");

module.exports = class UserRepository {
  constructor(dao) {
    this.dao = dao;
  }
  
  postLogin = async (email) => {
    let result = await this.dao.postLogin(email);
    return result;
  };

  postRegister = async (user) => {
    let users = new UsersDTO(user);
    let result = await this.dao.postRegister(
      users.first_name,
      users.last_name,
      users.email,
      users.age,
      users.password
    );
    return result;
  };
  postRestore = async (email, password) => {
    let result = await this.dao.postRestore(email, password);
    return result;
  };
};
