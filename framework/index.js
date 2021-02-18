import {
  AddAttachment, AssignIssue, CommentIssue, CreateComponent, CreateIssue,
  CreateSubtask, CreateUser, DeleteAttachment, DeleteIssue, CreateIssueWithParams,
  EditIssue, GetAllPermissions, GetAllUsers, GetAttachmentMetadata, GetCurrentUser,
  GetIssue, GetIssueTransitions,
  GetMyPermissions, GetProject, GetProjectComponents, TransitionIssue,
} from './services/index';

const apiAttachProvider = () => ({
  deleteAttachment: () => new DeleteAttachment(),
  getAttachmentMetadata: () => new GetAttachmentMetadata(),
});

export { apiAttachProvider };

const apiIssueProvider = () => ({
  addAttachment: () => new AddAttachment(),
  assignIssue: () => new AssignIssue(),
  commentIssue: () => new CommentIssue(),
  createIssue: () => new CreateIssue(),
  CreateIssueWithParams: () => new CreateIssueWithParams(),
  createSubtask: () => new CreateSubtask(),
  deleteIssue: () => new DeleteIssue(),
  editIssue: () => new EditIssue(),
  getIssue: () => new GetIssue(),
  getIssueTransitions: () => new GetIssueTransitions(),
  transitionIssue: () => new TransitionIssue(),
});

export { apiIssueProvider };

const apiProjectProvider = () => ({
  createComponent: () => new CreateComponent(),
  getProject: () => new GetProject(),
  getProjectComponents: () => new GetProjectComponents(),
});

export { apiProjectProvider };

const apiUserProvider = () => ({
  createUser: () => new CreateUser(),
  getAllPermissions: () => new GetAllPermissions(),
  getAllUsers: () => new GetAllUsers(),
  getCurrentUser: () => new GetCurrentUser(),
  getMyPermissions: () => new GetMyPermissions(),
});

export { apiUserProvider };
