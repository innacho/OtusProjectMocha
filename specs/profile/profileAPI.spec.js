import chai from 'chai';
import { apiUserProvider } from '../../framework';
import { adminData, userData } from '../../framework/config';

const { expect } = chai;

it.skip('Create user', async () => {
  const response = await apiUserProvider().createUser().post();
  expect(response.status).to.equal(201);
  expect(response.statusText).to.equal('Created');
  const body = await response.json();
  expect(body.displayName).to.equal(userData.displayName);
});

it('Get all users', async () => {
  const response = await apiUserProvider().getAllUsers().get();
  expect(response.status).to.equal(200);
  const body = await response.json();
  expect(body[15].displayName).to.equal(userData.displayName);
});

it('Get current user', async () => {
  const response = await apiUserProvider().getCurrentUser().get();
  expect(response.status).to.equal(200);
  const body = await response.json();
  expect(body.emailAddress).to.contain(adminData.emailAddress);
});

it('Get all permissions', async () => {
  const response = await apiUserProvider().getAllPermissions().get();
  expect(response.status).to.equal(200);
  const body = await response.json();
  expect(body.permissions.ADMINISTER.type).to.equal('GLOBAL');
});

it('Get my permissions', async () => {
  const response = await apiUserProvider().getMyPermissions().get();
  expect(response.status).to.equal(200);
  const body = await response.json();
  expect(body.permissions.ADMINISTER_PROJECTS.havePermission).to.equal(true);
});
