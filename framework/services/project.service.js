import fetch from 'node-fetch';
import { projectKey, urls } from '../config';
import { token } from '../bulder';

const GetProject = function GetProject() {
  this.get = async function get() {
    const url = `${urls.atlassianPrivate}/rest/api/2/project/${projectKey}`;
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

export { GetProject };

const GetProjectComponents = function GetProjectComponents() {
  this.get = async function get() {
    const url = `${urls.atlassianPrivate}/rest/api/2/project/${projectKey}/components`;
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

export { GetProjectComponents };
