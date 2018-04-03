export default class UserModel {
  constructor(id, login, avatar) {
    this.id = id;
    this.login = login;
    this.avatar = avatar;
  }

  static parse({ id, login, avatar_url }) {
    return new UserModel(id, login, avatar_url);
  }
}
