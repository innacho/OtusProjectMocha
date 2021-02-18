import fetch from 'node-fetch';
import { authData, urls } from '../config';
import { createToken } from '../bulder';

const GetAttachmentMetadata = function GetAttachmentMetadata() {
  this.get = async function get(attachID) {
    const url = `${urls.atlassianPrivate}/rest/api/2/attachment/${attachID}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: createToken(authData),
        Accept: 'application/json',
      },
    });
    return response;
  };
};

export { GetAttachmentMetadata };

const DeleteAttachment = function DeleteAttachment() {
  this.delete = async function (attachID) {
    const url = `${urls.atlassianPrivate}/rest/api/2/attachment/${attachID}`;
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization: createToken(authData),
      },
    });
    return response;
  };
};

export { DeleteAttachment };
