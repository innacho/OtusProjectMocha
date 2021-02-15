const adminAccountID = '60212468988758006877a1a6';
export { adminAccountID };

const attachData = 'attachment.jpg';
export { attachData };

const attachID = '10000';
export { attachID };

const authData = 'chonkainna@mail.ru:8yOdkMNN4C1r3xfEanyX9634';
export { authData };

const componentName = 'Component 1';
export { componentName };

const issueID = '10001';
export { issueID };

const projectID = '10003';
export { projectID };

const projectKey = 'FOUR';
export { projectKey };

const userAccountID = '5f367923e11542004654ea82';
export { userAccountID };

const adminData = {
  displayName: 'Inna',
  emailAddress: 'chonkainna@mail.ru',
  name: 'Inna',
  password: 'inna1234',
};
export { adminData };

const assignIssueData = {
  accountId: adminAccountID,
};
export { assignIssueData };

const commentIssueData = {
  body: 'Bug has been fixed.',
};
export { commentIssueData };

const componentData = {
  isAssigneeTypeValid: false,
  name: 'Test Component 3',
  description: 'test component description 3',
  project: projectKey,
  assigneeType: 'PROJECT_LEAD',
  leadAccountId: adminAccountID,
};
export { componentData };

const editIssueData = {
  update: {
    summary: [
      {
        set: 'Bug in business logic',
      },
    ],
    description: [
      {
        set: 'edited test description',
      },
    ],
    labels: [
      {
        add: 'triaged',
      },
      {
        remove: 'blocker',
      },
    ],
  },
  properties: [
    {
      value: 'Order number 10784',
      key: 'key1',
    },
    {
      value: 'Order number 10923',
      key: 'key2',
    },
  ],
};
export { editIssueData };

const issueData = {
  fields: {
    summary: 'Test issue summary',
    issuetype: {
      id: '10002',
    },
    components: [
      {
        id: '10001',
      },
    ],
    project: {
      id: projectID,
    },
    description: 'Issue test description',
    reporter: {
      id: adminAccountID,
    },
    labels: [
      'test_label2',
    ],
    assignee: {
      id: userAccountID,
    },
  },
};
export { issueData };

const subtaskData = {
  fields: {
    summary: 'Subtask test summary',
    issuetype: {
      id: '10003',
    },
    parent: {
      id: issueID,
    },
    components: [
      {
        id: '10001',
      },
    ],
    project: {
      id: projectID,
    },
    description: 'Test description for subtask',
    reporter: {
      id: userAccountID,
    },
    labels: [
      'test_label',
      'smoke_test',
    ],
    assignee: {
      id: adminAccountID,
    },
  },
};
export { subtaskData };

const transitionIssueData = {
  transition: {
    id: '31',
  },
};
export { transitionIssueData };

const userData = {
  displayName: 'User2',
  emailAddress: 'chonkainna@yandex.ru',
  name: 'User2',
  password: 'inna1234',
};
export { userData };
