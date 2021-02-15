import fetch from 'node-fetch';
import { urls, componentData } from '../config';
import { token } from '../bulder';

const CreateComponent = function CreateComponent() {
  this.post = async function post() {
    const url = `${urls.atlassianPrivate}/rest/api/2/component`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: token,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(componentData),
    });
    return response;
  };
};

export { CreateComponent };
