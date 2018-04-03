export default class RepoModel {
  constructor(id, name, description, issues) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.issues = issues;
  }

  static parse({ id, name, description, issues }) {
    return new RepoModel(id, name, description, issues);
  }
}
