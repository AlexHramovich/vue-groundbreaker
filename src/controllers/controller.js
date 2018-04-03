import axios from 'axios';
import UserModel from '../data-models/users-model';
import RepoModel from '../data-models/repos-model';

const AUTH_TOKEN = '36e55d8a85696aaef8efa0ba4992f1d76b7774fe';
axios.defaults.headers.common.Authorization = `token ${AUTH_TOKEN}`;

export const getUsers = userLogin =>
  axios
    .get(`https://api.github.com/search/users?q=${userLogin}+in:login&type:user`)
    .then(response => response.data.items)
    .then(users => users.map(user => UserModel.parse(user)));

export const getUsersRepos = userLogin =>
  axios
    .get(`https://api.github.com/users/${userLogin}/repos`)
    .then(response => response.data)
    .then(repos => repos.map(repo => RepoModel.parse(repo)));
