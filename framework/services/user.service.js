import fetch from 'node-fetch';
import { token } from '../bulder';
import { userData, urls } from '../config';

const CreateUser = function CreateUser() {
  this.post = async function post() {
    const url = `${urls.atlassianPrivate}/rest/api/2/user`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: token,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    return response;
  };
};

export { CreateUser };

const GetAllUsers = function GetAllUsers() {
  this.get = async function get() {
    const url = `${urls.atlassianPrivate}/rest/api/2/users/search`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: token,
        Accept: 'application/json',
      },
    });
    return response;
  };
};

export { GetAllUsers };

const GetCurrentUser = function GetCurrentUser() {
  this.get = async function get() {
    const url = `${urls.atlassianPrivate}/rest/api/2/myself`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: token,
        Accept: 'application/json',
      },
    });
    return response;
  };
};

export { GetCurrentUser };

const GetAllPermissions = function GetAllPermissions() {
  this.get = async function get() {
    const url = `${urls.atlassianPrivate}/rest/api/2/permissions`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: token,
        Accept: 'application/json',
      },
    });
    return response;
  };
};

export { GetAllPermissions };

const GetMyPermissions = function GetMyPermissions() {
  this.get = async function get() {
    const url = `${urls.atlassianPrivate}/rest/api/2/mypermissions?permissions=ADMINISTER_PROJECTS%2CEDIT_ISSUES`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: token,
        Accept: 'application/json',
      },
    });
    return response;
  };
};

export { GetMyPermissions };
