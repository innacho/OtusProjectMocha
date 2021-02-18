import fetch from 'node-fetch';
import { urls, componentData, authData } from '../config';
import { createToken } from '../bulder';

const CreateComponent = function CreateComponent() {
  this.post = async function post() {
    const url = `${urls.atlassianPrivate}/rest/api/2/component`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: createToken(authData),
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(componentData),
    });
    return response;
  };
};

export { CreateComponent };
