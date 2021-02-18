import chai from 'chai';
import { apiProjectProvider } from '../../framework';
import { componentData, componentName, projectKey } from '../../framework/config';

const { expect } = chai;

describe('Jira project api endpoint tests', () => {
  it('Get project by Key', async () => {
    const response = await apiProjectProvider().getProject().get();
    expect(response.status).to.equal(200);
    const body = await response.json();
    expect(body.key).to.equal(projectKey);
  });

  it('Get project components', async () => {
    const response = await apiProjectProvider().getProjectComponents().get();
    expect(response.status).to.equal(200);
    const body = await response.json();
    expect(body[0].name).to.equal(componentName);
  });

  it('Create component', async () => {
    const response = await apiProjectProvider().createComponent().post();
    expect(response.status).to.equal(201);
    const body = await response.json();
    expect(body.name).to.equal(componentData.name);
  });
});
