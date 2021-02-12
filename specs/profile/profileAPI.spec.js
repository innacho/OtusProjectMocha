import fetch from 'node-fetch';
import chai from 'chai';

const { expect } = chai;

it('Get current user', async () => {
  const response = await fetch('https://chonkainnatestproject.atlassian.net/rest/api/3/myself', {
    method: 'GET',
    headers: {
      Authorization: `Basic ${Buffer.from(
        'chonkainna@mail.ru:pFZPldBM5GCPCjldw7wMD3E7',
      ).toString('base64')}`,
      Accept: 'application/json',
    },
  });
  console.log(
    `Response: ${response.status} ${response.statusText}`,
  );
  const body = await response.json();
  expect(response.status).to.equal(200);
  expect(body.emailAddress).to.contain('chonkainna@mail.ru');
});

it('Get all permissions', async () => {
  fetch('https://chonkainnatestproject.atlassian.net/rest/api/2/permissions', {
    method: 'GET',
    headers: {
      Authorization: `Basic ${Buffer.from(
        'chonkainna@mail.ru:pFZPldBM5GCPCjldw7wMD3E7',
      ).toString('base64')}`,
      Accept: 'application/json',
    },
  })
    .then((response) => {
      console.log(
        `Response: ${response.status} ${response.statusText}`,
      );
      return response.text();
    })
    .then((text) => console.log(text))
    .catch((err) => console.error(err));
});

it('Get my permissions', async () => {
  fetch('https://chonkainnatestproject.atlassian.net/rest/api/2/mypermissions?permissions=ADMINISTER_PROJECTS%2CEDIT_ISSUES', {
    method: 'GET',
    headers: {
      Authorization: `Basic ${Buffer.from(
        'chonkainna@mail.ru:pFZPldBM5GCPCjldw7wMD3E7',
      ).toString('base64')}`,
      Accept: 'application/json',
    },
  })
    .then((response) => {
      console.log(
        `Response: ${response.status} ${response.statusText}`,
      );
      return response.text();
    })
    .then((text) => console.log(text))
    .catch((err) => console.error(err));
});

it('Get project by Key', async () => {
  const response = await fetch('https://chonkainnatestproject.atlassian.net/rest/api/2/project/FIR', {
    method: 'GET',
    headers: {
      Authorization: `Basic ${Buffer.from(
        'chonkainna@mail.ru:pFZPldBM5GCPCjldw7wMD3E7',
      ).toString('base64')}`,
      Accept: 'application/json',
    },
  });
  console.log(
    `Response: ${response.status} ${response.statusText}`,
  );
  const body = await response.json();
  expect(response.status).to.equal(200);
  // console.log(body);
  expect(body.name).to.contain('FirstProj');
});

it('Change project description by project Key', async () => {
  const bodyData = `{
  "description": "Inna TEST Example Project description"
}`;

  await fetch('https://chonkainnatestproject.atlassian.net/rest/api/2/project/FIR', {
    method: 'PUT',
    headers: {
      Authorization: `Basic ${Buffer.from(
        'chonkainna@mail.ru:8yOdkMNN4C1r3xfEanyX9634',
      ).toString('base64')}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: bodyData,
  })
    .then((response) => {
      console.log(
        `Response: ${response.status} ${response.statusText}`,
      );
      return response.text();
    })
    .then((text) => console.log(text))
    .catch((err) => console.error(err));
});

it('Create project', async () => {
  const bodyData = `{
  "notificationScheme": 10021,
  "description": "Example Project description",
  "leadAccountId": "60212468988758006877a1a6",
  "url": "http://atlassian.com",
  "projectTemplateKey": "com.pyxis.greenhopper.jira:gh-simplified-agility-kanban",
  "avatarId": 10200,
  "issueSecurityScheme": 10001,
  "name": "Example Proj",
  "permissionScheme": 10011,
  "projectTypeKey": "software",
  "key": "EXP",
  "categoryId": 10120
}`;

  fetch('https://chonkainnatestproject.atlassian.net/rest/api/2/project', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(
        'chonkainna@mail.ru:8yOdkMNN4C1r3xfEanyX9634',
      ).toString('base64')}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: bodyData,
  })
    .then((response) => {
      console.log(
        `Response: ${response.status} ${response.statusText}`,
      );
      return response.text();
    })
    .then((text) => console.log(text))
    .catch((err) => console.error(err));
  // дает 500
});

it('Create issue', async () => {
  const bodyData = `{
  "fields": {
    "summary": "Main order flow broken",
   "issuetype": {
      "id": "10000"
    },
    "components": [
      {
        "id": "10000"
      }
    ],
   "project": {
      "id": "10000"
    },
    "description": "Order entry fails when selecting supplier.",
    "reporter": {
      "id": "60212468988758006877a1a6"
    },
   "labels": [
      "bugfix",
      "blitz_test"
    ],
   "assignee": {
      "id": "60212468988758006877a1a6"
    },
    "customfield_10011":"Epic Name Test."
  }
}`;

  fetch('https://chonkainnatestproject.atlassian.net/rest/api/2/issue', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(
        'chonkainna@mail.ru:8yOdkMNN4C1r3xfEanyX9634',
      ).toString('base64')}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: bodyData,
  })
    .then((response) => {
      console.log(
        `Response: ${response.status} ${response.statusText}`,
      );
      return response.text();
    })
    .then((text) => console.log(text))
    .catch((err) => console.error(err));
  // рабочий вариант, куда писать ассерты?
  // const responseBody = await response.json();
  // expect(response.status).to.equal(201);
});

it.only('delete project', async () => {
  fetch('https://chonkainnatestproject.atlassian.net/rest/api/2/project/SEC2', {
    method: 'DELETE',
    headers: {
      Authorization: `Basic ${Buffer.from(
        'chonkainna@mail.ru:8yOdkMNN4C1r3xfEanyX9634',
      ).toString('base64')}`,
    },
  })
    .then((response) => {
      console.log(
        `Response: ${response.status} ${response.statusText}`,
      );
      return response.text();
    })
    .then((text) => console.log(text))
    .catch((err) => console.error(err));
});
