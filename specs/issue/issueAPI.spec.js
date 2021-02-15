import chai from 'chai';
import { apiIssueProvider } from '../../framework';
import { assignIssueData, commentIssueData, editIssueData } from '../../framework/config';

const { expect } = chai;

it.skip('Create issue', async () => {
  const response = await apiIssueProvider().createIssue().post();
  expect(response.status).to.equal(201);
  expect(response.statusText).to.equal('Created');
  const body = await response.json();
  const res = await apiIssueProvider().deleteIssue().delete(body.id);
  expect(res.status).to.equal(204);
});

it.skip('Create subtask', async () => {
  const r = await apiIssueProvider().createIssue().post();
  const b = await r.json();
  const response = await apiIssueProvider().createSubtask().post(b.id);
  expect(response.status).to.equal(201);
  expect(response.statusText).to.equal('Created');
  const body = await response.json();
  await apiIssueProvider().deleteIssue().delete(body.id);
  await apiIssueProvider().deleteIssue().delete(b.id);
});

it.skip('Get issue', async () => {
  const r = await apiIssueProvider().createIssue().post();
  const b = await r.json();
  const response = await apiIssueProvider().getIssue().get(b.id);
  expect(response.status).to.equal(200);
  const body = await response.json();
  expect(body.id).to.equal(b.id);
  await apiIssueProvider().deleteIssue().delete(body.id);
});

it.skip('Delete issue', async () => {
  const r = await apiIssueProvider().createIssue().post();
  const b = await r.json();
  const response = await apiIssueProvider().deleteIssue().delete(b.id);
  expect(response.status).to.equal(204);
});

it.skip('Get issue transitions', async () => {
  const r = await apiIssueProvider().createIssue().post();
  const b = await r.json();
  const response = await apiIssueProvider().getIssueTransitions().get(b.id);
  expect(response.status).to.equal(200);
  const body = await response.json();
  expect(body.transitions[0].id).to.equal('11');
  await apiIssueProvider().deleteIssue().delete(b.id);
});

it.skip('Edit issue', async () => {
  const r = await apiIssueProvider().createIssue().post();
  expect(r.status).to.equal(201);
  const b = await r.json();

  const res = await apiIssueProvider().editIssue().put(b.id);
  expect(res.status).to.equal(204);

  const response = await apiIssueProvider().getIssue().get(b.id);
  expect(response.status).to.equal(200);
  const body = await response.json();
  expect(body.fields.description).to.equal(editIssueData.update.description[0].set);
  await apiIssueProvider().deleteIssue().delete(b.id);
});

it.skip('Comment issue', async () => {
  const r = await apiIssueProvider().createIssue().post();
  expect(r.status).to.equal(201);
  const b = await r.json();

  const res = await apiIssueProvider().commentIssue().post(b.id);
  expect(res.status).to.equal(201);
  const body = await res.json();
  expect(body.body).to.equal(commentIssueData.body);

  await apiIssueProvider().deleteIssue().delete(b.id);
});

it.skip('Transition issue', async () => {
  const r = await apiIssueProvider().createIssue().post();
  expect(r.status).to.equal(201);
  const b = await r.json();

  const res = await apiIssueProvider().transitionIssue().post(b.id);
  expect(res.status).to.equal(204);

  const response = await apiIssueProvider().getIssue().get(b.id);
  expect(response.status).to.equal(200);
  const body = await response.json();
  expect(body.fields.status.id).to.equal('3');
  await apiIssueProvider().deleteIssue().delete(b.id);
});

it.skip('Assign issue', async () => {
  const r = await apiIssueProvider().createIssue().post();
  expect(r.status).to.equal(201);
  const b = await r.json();

  const res = await apiIssueProvider().assignIssue().put(b.id);
  expect(res.status).to.equal(204);

  const response = await apiIssueProvider().getIssue().get(b.id);
  expect(response.status).to.equal(200);
  const body = await response.json();
  expect(body.fields.assignee.accountId).to.equal(assignIssueData.accountId);
  await apiIssueProvider().deleteIssue().delete(b.id);
});

it('Add attachment', async () => {
  const r = await apiIssueProvider().createIssue().post();
  expect(r.status).to.equal(201);
  const b = await r.json();

  const res = await apiIssueProvider().addAttachment().post(b.id);
  const err = await res.text();
  console.log(err);
  expect(res.status).to.equal(200);

  await apiIssueProvider().deleteIssue().delete(b.id);
});
