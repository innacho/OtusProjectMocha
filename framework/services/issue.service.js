import fetch from 'node-fetch';
import { formData, createToken } from '../bulder';

import {
  assignIssueData, authData, commentIssueData, editIssueData,
  issueData, subtaskData, transitionIssueData, urls,
} from '../config';

const AddAttachment = function AddAttachment() {
  this.post = async function post(issueId) {
    const url = `${urls.atlassianPrivate}/rest/api/2/issue/${issueId}/attachments`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: createToken(authData),
        Accept: 'application/json',
        'X-Atlassian-Token': 'no-check',
      },
      body: formData,
    });
    return response;
  };
};
export { AddAttachment };

const AssignIssue = function AssignIssue() {
  this.put = async function put(issueId) {
    const url = `${urls.atlassianPrivate}/rest/api/2/issue/${issueId}/assignee`;
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: createToken(authData),
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(assignIssueData),
    });
    return response;
  };
};
export { AssignIssue };

const CommentIssue = function CommentIssue() {
  this.post = async function post(issueId) {
    const url = `${urls.atlassianPrivate}/rest/api/2/issue/${issueId}/comment`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: createToken(authData),
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentIssueData),
    });
    return response;
  };
};
export { CommentIssue };

const CreateIssue = function CreateIssue() {
  this.post = async function post() {
    const url = `${urls.atlassianPrivate}/rest/api/2/issue`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: createToken(authData),
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(issueData),
    });
    return response;
  };
};
export { CreateIssue };

const CreateIssueWithParams = function CreateIssueWithParams() {
  this.post = async function post(tokenParams, issueDataParams) {
    const url = `${urls.atlassianPrivate}/rest/api/2/issue`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: createToken(tokenParams),
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(issueDataParams),
    });
    return response;
  };
};
export { CreateIssueWithParams };

const CreateSubtask = function CreateSubtask() {
  this.post = async function post(parentId) {
    const url = `${urls.atlassianPrivate}/rest/api/2/issue`;
    subtaskData.fields.parent.id = parentId;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: createToken(authData),
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(subtaskData),
    });
    return response;
  };
};
export { CreateSubtask };

const DeleteIssue = function DeleteIssue() {
  this.delete = async function (issueID) {
    const url = `${urls.atlassianPrivate}/rest/api/2/issue/${issueID}`;
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization: createToken(authData),
      },
    });
    return response;
  };
};
export { DeleteIssue };

const EditIssue = function EditIssue() {
  this.put = async function put(issueId) {
    const url = `${urls.atlassianPrivate}/rest/api/2/issue/${issueId}`;
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: createToken(authData),
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editIssueData),
    });
    return response;
  };
};
export { EditIssue };

const GetIssue = function GetIssue() {
  this.get = async function get(issueKey) {
    const url = `${urls.atlassianPrivate}/rest/api/2/issue/${issueKey}`;
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

export { GetIssue };

const GetIssueTransitions = function GetIssueTransitions() {
  this.get = async function get(issueKey) {
    const url = `${urls.atlassianPrivate}/rest/api/2/issue/${issueKey}/transitions`;
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

export { GetIssueTransitions };

const TransitionIssue = function TransitionIssue() {
  this.post = async function post(issueId) {
    const url = `${urls.atlassianPrivate}/rest/api/2/issue/${issueId}/transitions`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: createToken(authData),
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transitionIssueData),
    });
    return response;
  };
};
export { TransitionIssue };
