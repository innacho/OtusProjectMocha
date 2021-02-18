import chai from 'chai';
import itParam from 'mocha-param';
import * as api from '../../framework';
import * as data from '../../framework/config';

const { expect } = chai;

describe('Jira issue api endpoint critical tests', () => {
  it('Create issue', async () => {
    const response = await api.apiIssueProvider().createIssue().post();
    expect(response.status).to.equal(201);
    expect(response.statusText).to.equal('Created');
    const body = await response.json();
    await api.apiIssueProvider().deleteIssue().delete(body.id);
  });

  it('Delete issue', async () => {
    const r = await api.apiIssueProvider().createIssue().post();
    const b = await r.json();
    const response = await api.apiIssueProvider().deleteIssue().delete(b.id);
    expect(response.status).to.equal(204);
  });
});

describe('Jira issue api endpoint tests', () => {
  let currentIssueId;
  let body = {};

  beforeEach(async () => {
    const r = await api.apiIssueProvider().createIssue().post();
    body = await r.json();
    currentIssueId = body.id;
  });

  afterEach(async () => {
    const res = await api.apiIssueProvider().deleteIssue().delete(currentIssueId);
    expect(res.status).to.equal(204);
  });

  it.skip('Create subtask', async () => {
    const response = await api.apiIssueProvider().createSubtask().post(currentIssueId);
    expect(response.status).to.equal(201);
    expect(response.statusText).to.equal('Created');
    const b = await response.json();
    await api.apiIssueProvider().deleteIssue().delete(b.id);
  });

  it.skip('Get issue', async () => {
    const response = await api.apiIssueProvider().getIssue().get(currentIssueId);
    expect(response.status).to.equal(200);
    const b = await response.json();
    expect(currentIssueId).to.equal(b.id);
  });

  it.skip('Get issue transitions', async () => {
    const response = await api.apiIssueProvider().getIssueTransitions().get(currentIssueId);
    expect(response.status).to.equal(200);
    const b = await response.json();
    expect(b.transitions[0].id).to.equal('11');
  });

  it.skip('Edit issue', async () => {
    const res = await api.apiIssueProvider().editIssue().put(currentIssueId);
    expect(res.status).to.equal(204);
    const response = await api.apiIssueProvider().getIssue().get(currentIssueId);
    const b = await response.json();
    expect(b.fields.description).to.equal(data.editIssueData.update.description[0].set);
  });

  it.skip('Add attachment', async () => {
    const res = await api.apiIssueProvider().addAttachment().post(currentIssueId);
    expect(res.status).to.equal(200);
    const b = await res.json();
    expect(b[0].filename).to.equal(data.attachData);
  });

  it.skip('Comment issue', async () => {
    const res = await api.apiIssueProvider().commentIssue().post(currentIssueId);
    expect(res.status).to.equal(201);
    const b = await res.json();
    expect(b.body).to.equal(data.commentIssueData.body);
  });

  it.skip('Transition issue', async () => {
    const res = await api.apiIssueProvider().transitionIssue().post(currentIssueId);
    expect(res.status).to.equal(204);
    const response = await api.apiIssueProvider().getIssue().get(currentIssueId);
    const b = await response.json();
    expect(b.fields.status.id).to.equal('3');
  });

  it.skip('Assign issue', async () => {
    const res = await api.apiIssueProvider().assignIssue().put(currentIssueId);
    expect(res.status).to.equal(204);
    const response = await api.apiIssueProvider().getIssue().get(currentIssueId);
    const b = await response.json();
    expect(b.fields.assignee.accountId).to.equal(data.assignIssueData.accountId);
  });

  it.skip('Get attachment data', async () => {
    const res = await api.apiIssueProvider().addAttachment().post(currentIssueId);
    const b = await res.json();
    const res2 = await api.apiAttachProvider().getAttachmentMetadata().get(b[0].id);
    expect(res2.status).to.equal(200);
    const b2 = await res2.json();
    expect(b2.id).to.contain((b[0].id).toString);
    expect(b2.filename).to.equal(data.attachData);
  });

  it.skip('Delete attachment', async () => {
    const res = await api.apiIssueProvider().addAttachment().post(currentIssueId);
    const b = await res.json();
    const res2 = await api.apiAttachProvider().deleteAttachment().delete(b[0].id);
    expect(res2.status).to.equal(204);
  });

  const tests = [
    { name: 'incorrect credentials', auth: data.incorrectAuthData, issueBody: data.issueData, expected: 401 },
    { name: 'user without permission', auth: data.wrongUserAuthData, issueBody: data.issueData, expected: 403 },
    { name: 'request missing required fields', auth: data.authData, issueBody: data.issueDataNoField, expected: 400 },
  ];

  describe('Create issue parametric test', function () {
    itParam('Creating issue for ${value.name}', tests, async function (test) {
      {
      const response = await api.apiIssueProvider().CreateIssueWithParams().post(test.auth, test.issueBody);
      expect(response.status).to.equal(test.expected);}
    });
  });
});
